const Binance = require('node-binance-api');
const fs = require('fs'); // File System module

// Initialize Binance API with your API key and secret
const binance = new Binance().options({
    api_key: 'xAqk8DRzB69ogy0OwTn6C7610TfbvPA8bYBiUHy9BUPw7d7Jg1IPKzsJHPJOdtkP',
    api_secret: '4FARspZ8itm2nCy0jkcxMKweK4xza1tAhINifCmNZe7PN3xdcudsFOmm66w8uhqs',
    family: 4
});

// Allowed intervals and interval to use
const allowedIntervals = ['1m', '3m', '5m', '15m', '30m', '1h', '2h', '4h', '6h'];
const interval = '1h';

// Coin symbols
// const coins = [
//     // "AAVEUSDT",
//     "ALGOUSDT",
//     "APTUSDT",
//     "ARBUSDT",
//     "ARPAUSDT",
//     "AVAXUSDT",
//     "AXLUSDT",
//     "AXSUSDT",
//     "BNBUSDT",
//     "BCHABCUSDT",
//     "BTCUSDT",
//     "BTTCUSDT",
//     "BONKUSDT",
//     "ADAUSDT",
//     "LINKUSDT",
//     "CHZUSDT",
//     "CFXUSDT",
//     "ATOMUSDT",
//     "DAIUSDT",
//     "MANAUSDT",
//     "DOGEUSDT",
//     "XECUSDT",
//     "EGLDUSDT",
//     "ETCUSDT",
//     "ENSUSDT",
//     "ETHUSDT",
//     "FTMUSDT",
//     "FILUSDT",
//     "USDCUSDT",
//     "FLOWUSDT",
//     "FXSUSDT",
//     "FTTUSDT",
//     "GALAUSDT",
//     "GNOUSDT",
//     "HBARUSDT",
//     "HNTUSDT",
//     "IMXUSDT",
//     "INJUSDT",
//     "ICPUSDT",
//     "IOTAUSDT",
//     "JUPUSDT",
//     "KAVAUSDT",
//     "KLAYUSDT",
//     "LDOUSDT",
//     "LTCUSDT",
//     "MKRUSDT",
//     "MTLUSDT",
//     "MATICUSDT",
//     "MINAUSDT",
//     "XMRUSDT",
//     "NEARUSDT",
//     "NEOUSDT",
//     "ROSEUSDT",
//     "OPUSDT",
//     "ORDIUSDT",
//     "CAKEUSDT",
//     "PENDLEUSDT",
//     "ASTRUSDT",
//     "DOTUSDT",
//     "QNTUSDT",
//     "RNDRUSDT",
//     "XRPUSDT",
//     "RPLUSDT",
//     "RONINUSDT",
//     "SEIUSDT",
//     "SHIBUSDT",
//     "SCUSDT",
//     "SOLUSDT",
//     "STXUSDT",
//     "XLMUSDT",
//     "SUIUSDT",
//     "LUNCUSDT",
//     "XTZUSDT",
//     "GRTUSDT",
//     "SANDUSDT",
//     "THETAUSDT",
//     "RUNEUSDT",
//     "TRXUSDT",
//     "TUSDUSDT",
//     "UNIUSDT",
//     "USDCUSDT",
//     "VETUSDT",
//     "WOOUSDT",
//     "WBTCUSDT"
// ];
const coins=[
    'AAVE', 'AKT', 'ALGO', 'APT', 'ARB', 'AR', 'AVAX', 'AXL', 'AXS', 'BNB', 
    'BCH', 'BSV', 'BTC', 'BGB', 'TENSOR', 'BTTC', 'BONK', 'ADA', 'CELES', 'LINK', 
    'CHZ', 'CFX', 'ATOM', 'CRONOS', 'DAI', 'MANA', 'DOGE', 'XEC', 'EGLD', 'ETC', 
    'ENS', 'ETH', 'FTM', 'FIL', 'DUSD', 'FLOW', 'FXS', 'FRAX', 'FTT', 'GALA', 'GNO', 
    'HBAR', 'HNT', 'IMX', 'INJ', 'ICP', 'IOTA', 'JUP', 'KASP', 'KAVA', 'KLAY', 'KCS', 
    'LDO', 'LTC', 'MKR', 'MTL', 'MATIC', 'MINA', 'XMR', 'NEAR', 'NEO', 'ROSE', 'OKB', 
    'OPT', 'ORD', 'CAKE', 'PPC', 'PENDLE', 'PLM', 'DOT', 'QNT', 'RNDR', 'XRP', 'RPL', 
    'RON', 'SEI', 'SHIB', 'SC', 'SOL', 'SPRK', 'STX', 'XLM', 'SUI', 'LUNA', 
    'XTZ', 'GRT', 'SAND', 'THETA', 'RUNE', 'TON', 'TRX', 'TUSD', 'UNI', 'LEO', 'USDC', 
    'VET', 'WEMIX', 'WOO', 'WBTC'
];


// Initialize counter variable
let v = 0;

// JSON file to store candlestick data
const jsonFilePath = 'candlesticks.json';

if (allowedIntervals.includes(interval)) {
    coins.forEach(coin => {
        const symbol = coin+'USDT';
        
        binance.candlesticks(symbol, interval, async (error, ticks, symbol) => {
            // Increment counter each time a fetch is attempted

            if (error) {
                console.error(`Error fetching candlestick data for ${symbol}:`, error);
                console.log(`Attempt ${v} failed.`);
                return;
            }

            if (!ticks || ticks.length === 0) {
                console.error(`No candlestick data available for ${symbol}.`);
                return;
            }
            v += 1;


            // Array to store candlestick data
            let candlestickData = [];

            console.info(`${symbol} candlesticks:`);

            // Process each candlestick tick
            ticks.forEach((tick, index) => {
                let [time, open, high, low, close, volume, closeTime, assetVolume, trades, buyBaseVolume, buyAssetVolume, ignored] = tick;

                // Create candlestick object
                const candlestick = {
                    timestamp: time,
                    open: parseFloat(open),
                    high: parseFloat(high),
                    low: parseFloat(low),
                    close: parseFloat(close),
                    volume: parseFloat(volume),
                    symbol
                };

                // Log candlestick information
                console.info(`Candlestick ${index + 1}: Time: ${time}, Open: ${open}, High: ${high}, Low: ${low}, Close: ${close}, Volume: ${volume}`);

                // Append candlestick to the array
                candlestickData.push(candlestick);
            });

            // Read existing data from JSON file
            let existingData;
            try {
                const rawData = fs.readFileSync(jsonFilePath, 'utf8');
                existingData = JSON.parse(rawData);
            } catch (error) {
                existingData = [];
            }

            // Append new candlestick data to existing data
            existingData.push(...candlestickData);

            // Write updated data back to the JSON file
            fs.writeFileSync(jsonFilePath, JSON.stringify(existingData, null, 2));

            // Log counter
            console.log(`v: ${v}`);
        }, { limit: 1000 });
    });
} else {
    console.error('Invalid interval specified. Please choose one of the allowed intervals.');
}
