const { MongoClient } = require('mongodb');
const axios = require('axios');

// MongoDB connection URI
const uri = "mongodb+srv://Youssef:azerty12@cluster0.uoe6yol.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

// Initialize the MongoClient
const client = new MongoClient(uri);

// async function fetchLast30Data(req, res) {
//     try {
//         const { coin } = req.query;
//         console.log(`Fetching last 30 values for ${coin}...`);

//         await client.connect();

//         const database = client.db("Coins_data");
//         const collection = database.collection(coin);

//         const data = await collection.find({})
//             .sort({ timestamp: -1 }) // Sort in ascending order
//             .limit(30) // Limit to last 30 documents
//             .toArray();

// // Removing 'Market Cap' field from each item in the fetched data
// const cleanedData = data.map(item => {
//     const { 'Market Cap': marketCap, ...rest } = item;
//     return rest;
// });

// const histo_data = cleanedData.map(item => ({
//     ...item,
//     // predictedPrice: item.price * 1.02, // Dummy prediction logic
// }));
// const input_data = {
//     coin: coin,
//     close: data.map(item => item.Close)
// };

        

//         console.log(input_data);
//         console.log(histo_data);
        
// // Send input data to FastAPI server
// axios.post('http://0.0.0.0:8000/predict', {
//     coin: input_data.coin,
//     close: input_data.close
// })
// .then(response => {
//     // console.log('Response:', response.data);
//     preds = response.data.predictions;
//     console.log('Predictions:', preds);
//     const LAST_timestamp = cleanedData[0].timestamp;
//     console.log('LAST_timestamp:', LAST_timestamp)
//     const predictedData = preds.map((item, index) => {
//         return {
//             timestamp: LAST_timestamp + (index + 1) * 24 * 60 * 60 , // Adding seconds to the timestamp
//             predictedPrice: preds[index]
//         };
//     });
//     console.log('Predicted Data:', predictedData);
//     res.json({histo_data,predictedData});
// })
// .catch(error => {
//     console.error(input_data);
//     console.error('Error:', error);
// });

    


//         console.log(`Data sent successfully.`);
//     } catch (error) {
//         // console.error("An error occurred:", error);
//         res.status(500).json({ error: 'An error occurred' });
//     } finally {
//         await client.close();
//     }
// }

// module.exports = fetchLast30Data;

async function fetchLast30Data(req, res) {
    try {
        const { coin } = req.query;
        console.log(`Fetching last 30 values for ${coin}...`);

        await client.connect();

        const database = client.db("Coins_data");
        const collection = database.collection(coin);

        const data = await collection.find({})
            .sort({ timestamp: -1 }) // Sort in ascending order
            .limit(40) // Limit to last 30 documents
            .toArray();

        // Removing 'Market Cap' field from each item in the fetched data
        const cleanedData = data.map(item => {
            const { 'Market Cap': marketCap, ...rest } = item;
            return rest;
        });

        // Extract data from index 0 to 30
        const dataFrom0to30 = cleanedData.slice(10, 40).reverse();

        // Extract data from index 30 to 0
        const dataFrom30to0 = cleanedData.slice(0, 10).reverse();

        res.json({ dataFrom0to30, dataFrom30to0 });
        console.log(`Data sent successfully.`);
    } catch (error) {
        console.error("An error occurred:", error);
        res.status(500).json({ error: 'An error occurred' });
    } finally {
        await client.close();
    }
}
module.exports = fetchLast30Data;
