const express = require('express')
const cors = require('cors')
const { Pool } = require('pg');
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const cookieParser = require('cookie-parser');
const jwt = require('jsonwebtoken');
const executeTransaction = require('./transaction.js');
const sendVerificationEmail = require('./utils/sendVerificationEmail');
require('dotenv').config();
const fetchDataFromMongoDB = require('./fetchData');
const { OAuth2Client } = require('google-auth-library');
const { MongoClient } = require('mongodb'); // Import MongoClient from mongodb package

// MongoDB connection URI
const uri = "mongodb+srv://Youssef:azerty12@cluster0.uoe6yol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new OAuth2Client("596157546363-nkhul4k9ieephhifor3ag73it56lj3ar.apps.googleusercontent.com")
const app = express();

app.listen(3001, () => console.log('server is running on port 3001'));

// Connect to database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pcd_db',
    password: 'admin',
    port: 5432, 
});

// Middleware
app.use(cookieParser());
app.use(express.json());
app.use(cors({
    origin: ["http://localhost:3000"],
    methods: ["POST", "GET"],
    credentials: true
}));

// Array to store users
const users = [];

// Function to upsert user data
function upsert(array, item){
    const i = array.findIndex((_item) => _item.email === item.email);
    if (i > -1) array[i] = item;
    else array.push(item);
}

// Google login route
app.post('/api/google-login', async (req, res) => {
    const { token } = req.body;
    const ticket = await client.verifyIdToken({
        idToken: token,
        audience: "596157546363-nkhul4k9ieephhifor3ag73it56lj3ar.apps.googleusercontent.com",
    })

    const { name, email, picture } = ticket.getPayload();
    const result = await pool.query('SELECT * FROM userg WHERE email = $1', [email]);
    
    if (result.rows.length > 0) {
        await pool.query('DELETE FROM userg WHERE email = $1', [email]);
    }
    
    await pool.query('INSERT INTO userg (name, email, picture) VALUES ($1, $2, $3)', [name, email, picture]);

    upsert(users, { name, email, picture });

    res.status(201).json({ name, email, picture });
});

// Create user route
app.post('/Create', async (req, res) => {
    const { name, email, password } = req.body;
    try {
        // Insert user credentials into the users table
        const emailToken = crypto.randomBytes(64).toString('hex');
        const hashedPassword = await bcrypt.hash(password, 10);
        const query = 'INSERT INTO users (name, email, password, is_verified, emailtoken) VALUES ($1, $2, $3, false, $4)';
        await pool.query(query, [name, email, hashedPassword, emailToken]);

        await sendVerificationEmail(email, emailToken);

        res.status(200).send('User registered successfully. Verification email sent.');
    } catch (error) {
        console.error('Error inserting user', error);
        res.status(500).send('Internal server error');
    }
});

// Login route
app.post('/Login', async (req, res) => {
    const { email, password } = req.body;
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            const name = user.name;
            const isPasswordMatch = await bcrypt.compare(password, user.password);

            if (isPasswordMatch) {
                const token = jwt.sign({ name }, 'your-secret-key', { expiresIn: '1d' });
                res.cookie('token', token);
                res.status(200).send('User logged in successfully');
                console.log('User logged in successfully');
            } else {
                res.status(401).json({ error: 'Invalid email or password' });
                console.log('Invalid email or password');
            }
        } else {
            res.status(401).json({ error: 'Invalid email or password' });
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error logging in user:', error);
        res.status(500).send('Internal server error');
    }
});

// Verify account route
app.get('/verify', async (req, res) => {
    const { token } = req.query;
    try {
        const query = 'SELECT * FROM users WHERE emailtoken = $1';
        const result = await pool.query(query, [token]);

        if (result.rows.length === 0) {
            return res.status(404).send('User not found');
        }

        const user = result.rows[0];

        if (user.emailtoken !== token) {
            return res.status(400).send('Invalid verification token');
        }

        const updateQuery = 'UPDATE users SET is_verified = true, emailtoken = NULL WHERE id = $1';
        await pool.query(updateQuery, [user.id]);

        res.status(200).send('Account verified successfully');
    } catch (error) {
        console.error('Error verifying account:', error);
        res.status(500).send('Internal server error');
    }
});

// Logout route
app.get("/logout", (req, res) => {
    res.clearCookie("token");
    return res.json({ status: "200" });
});

// API balance route
app.post('/api_balance', async (req, res) => {
    const { apiKey, apiSecret } = req.body;
    try {
        const result = await executeTransaction(apiKey, apiSecret);
        res.status(200).json(result);
    } catch (error) {
        console.error('Error:', error);
        res.status(500).send('Internal server error');
    }
});

// Fetch data route
app.get('/fetchData', fetchDataFromMongoDB);

module.exports = app;
