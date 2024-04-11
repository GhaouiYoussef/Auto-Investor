const express = require('express')
const cors = require('cors')
const { Pool } = require('pg');
const bcrypt = require('bcrypt')
const crypto = require('crypto');
const coockieParser= require('cookie-parser')
const jwt=require('jsonwebtoken')
const sendVerificationEmail = require('./utils/sendVerificationEmail');

require('dotenv').config();


const app = express()
app.listen(3001 ,() => 
      console.log('server is running on port 3001')
)
// Connect to database
const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    database: 'pcd_db',
    password: 'admin',
    port: 5432, 
});
// middleware
app.use(coockieParser());
app.use(express.json());
app.use(cors(
     {

        origin:["http://localhost:3000"],
        methods: ["POST, GET"],
        credentials: true
     }
   


));

//routers
app.post('/Create',async (req,res) =>{
const {name,email,password} = req.body
try {
    // Insert user credentials into the users table
    const emailToken = crypto.randomBytes(64).toString('hex');
    const hashedPassword = await bcrypt.hash(password, 10);
    const query = 'INSERT INTO users (name, email, password, is_verified, emailtoken) VALUES ($1, $2, $3, false, $4)' ;
    await pool.query(query, [name, email, hashedPassword,emailToken]);

    await sendVerificationEmail(email,emailToken);

    res.status(200).send('User registered successfully. Verification email sent.');
} catch (error) {
    console.error('Error inserting user', error);
    res.status(500).send('Internal server error');
}
})
//login 
app.post('/Login',async (req,res) =>{
    
    const {email,password} = req.body
    try {
        const query = 'SELECT * FROM users WHERE email = $1';
        const result = await pool.query(query, [email]);

        if (result.rows.length > 0) {
            const user = result.rows[0];
            const name= user.name;
            const isPasswordMatch = await bcrypt.compare(password, user.password);
            if (isPasswordMatch) {
                 //Passwords match
                const token = jwt.sign({name},'696ea2d3de7c2c0eb1a66f1f82f4a1493723436e9612f73e911d647431a836304bdeb17f45e875e0f4d740c2a398920c09924002775a42cc4ff9ce2fa2db408a', { expiresIn: '1d' });
                res.cookie('token',token);
                res.status(200).send('User logged in successfully');
                console.log('User logged in successfully');

            } else {
                // Passwords do not match
                res.status(401).json({ error: 'Invalid email or password' });
                console.log('Invalid email or password');
            }
        } else {
            // User does not exist
            res.status(401).json({ error: 'Invalid email or password' });
            console.log('User not found');
        }
    } catch (error) {
        console.error('Error inserting user', error);
        res.status(500).send('Internal server error');
    }
    })
app.get('/verify', async (req, res) => {
        const { token } = req.query; // Extract the verification token from the URL query parameters
        try {
            // Retrieve the user from the database based on the verification token
            const query = 'SELECT * FROM users WHERE emailtoken = $1';
            const result = await pool.query(query, [token]);
    
            if (result.rows.length === 0) {
                return res.status(404).send('User not found');
            }
    
            const user = result.rows[0];
    
            // Compare the verification token from the URL with the one stored in the database for the user
            if (user.emailtoken !== token) {
                return res.status(400).send('Invalid verification token');
            }
    
            // Update the user's verification status in the database to mark the account as verified
            const updateQuery = 'UPDATE users SET is_verified = true, emailtoken = NULL WHERE id = $1';
            await pool.query(updateQuery, [user.id]);


            // Provide feedback to the user on the verification status
            res.status(200).send('Account verified successfully');
        } catch (error) {
            console.error('Error verifying account:', error);
            res.status(500).send('Internal server error');
        }
    });
app.get("/logout", (req, res) => {
        res.clearCookie("token");
        return res.json({ status: "200"});
      });
      
    
