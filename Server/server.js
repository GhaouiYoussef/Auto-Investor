const express = require('express')
const cors = require('cors')
const { Pool } = require('pg');

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

app.use(express.json())
app.use(cors())

//routers
app.post('/Create',async (req,res) =>{
const {name,email,password} = req.body
try {
    // Insert user credentials into the users table
    const query = 'INSERT INTO users (name, email, password) VALUES ($1, $2, $3)';
    await pool.query(query, [name, email ,password]);

    res.status(200).send('User registered successfully');
} catch (error) {
    console.error('Error inserting user', error);
    res.status(500).send('Internal server error');
}
})
//login 
app.post('/Login',async (req,res) =>{
    const {email,password} = req.body
    try {
        const query = 'SELECT * FROM users WHERE email = $1 AND password = $2';
    const result = await pool.query(query, [email, password]);

    if (result.rows.length > 0) {
        // User exists
        res.status(200).send('User exists');
        console.log('User exists');
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
