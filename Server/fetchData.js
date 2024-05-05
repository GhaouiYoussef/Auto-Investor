const { MongoClient } = require('mongodb');
const fs = require('fs');

// MongoDB connection URI
const uri = "mongodb+srv://Youssef:azerty12@cluster0.uoe6yol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Initialize the MongoClient
const client = new MongoClient(uri, );

async function fetchData(req, res) {
    try {
        // Get the selected coin, start date, and end date from the query string
        const { coin, startDate, endDate } = req.query;
        console.log(`Fetching data for ${coin} between ${startDate} and ${endDate}...`);
        const startTimestamp = new Date(startDate).getTime();
        const endTimestamp = new Date(endDate).getTime();

        // Connect to the MongoDB server
        await client.connect();

        // Select the database and collection
        const database = client.db("Coins");
        const collection = database.collection("Info");
        // Fetch data from MongoDB based on the selected coin and date range
        const data = await collection.find({
            'symbol': coin,
            'timestamp': { $gte: startTimestamp, $lte: endTimestamp }
        }).toArray();
        // console.log(data);


        // Send the data as JSON response
        res.json(data);

        console.log(`Data sent successfully.`);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        // Close the MongoDB connection
        await client.close();
    }
}

module.exports = fetchData;
