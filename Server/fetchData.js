const fs = require('fs');
const { MongoClient, ServerApiVersion } = require('mongodb');

// MongoDB connection URI
const uri = "mongodb+srv://Youssef:azerty12@cluster0.uoe6yol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Initialize the MongoClient
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});


async function fetchData(req, res) {
    try {
        // Connect the client to the server
        await client.connect();

        // Select the database and collection
        const database = client.db("Coins");
        const collection = database.collection("Info");

        // Fetch data from MongoDB
        const data = await collection.find({'symbol':'AAVEUSDT'}).toArray();

        // Send the data as JSON response
        res.json(data);

        console.log(`Data sent successfully.`);

    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        // Close the connection
        await client.close();
    }
}
module.exports = fetchData;