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