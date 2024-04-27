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

async function fetchData() {
    try {
        // Connect the client to the server
        await client.connect();

        // Select the database and collection
        const database = client.db("Coins");
        const collection = database.collection("Info");

        // Fetch data from MongoDB
        const data = await collection.find({'symbol':'AAVEUSDT'}).toArray();

        // Write data to JSON file
        const jsonFilePath = 'candlesticksIfetched.json';
        fs.writeFileSync(jsonFilePath, JSON.stringify(data, null, 2));

        console.log(`Data extracted and saved to ${jsonFilePath}.`);

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}


async function run() {
    try {
        // Connect the client to the server
        await client.connect();

        // Select the database and collection
        const database = client.db("Coins");
        const collection = database.collection("Info");

        // Read data from JSON file
        const jsonFilePath = 'candlesticks.json';
        const rawData = fs.readFileSync(jsonFilePath, 'utf8');
        const data = JSON.parse(rawData);

        // Insert data in batches of 1000 documents
        const batchSize = 1000;
        let insertedCount = 0;

        for (let i = 0; i < data.length; i += batchSize) {
            // Create a batch from the data array
            const batch = data.slice(i, i + batchSize);

            // Insert the batch into the collection
            const result = await collection.insertMany(batch);

            // Increment the inserted count
            insertedCount += result.insertedCount;

            console.log(`Inserted batch from index ${i}: ${result.insertedCount} documents inserted.`);
        }

        console.log(`Total documents inserted: ${insertedCount}`);

    } catch (error) {
        console.error("An error occurred:", error);
    } finally {
        // Close the connection
        await client.close();
    }
}

// Run the function
fetchData().catch(console.error);
