const Binance = require('node-binance-api');
const checkFunds = require('./order.js');

const executeTransaction = (apiKey, apiSecret) => {
    return new Promise((resolve, reject) => {
        // Initialize Binance API with your API key and secret
        const binance = new Binance().options({
            APIKEY: apiKey,
            APISECRET: apiSecret,
            family: 4
        });

        // Check balances function
        const checkBalances = () => {
            return new Promise((resolve, reject) => {
                binance.balance((error, balances) => {
                    if (error) {
                        reject(error);
                    } else {
                        const balanceDict = {};
                        for (let coin in balances) {
                            const coinav = balances[coin].available;
                            if (coinav > 0) {
                                balanceDict[coin] = coinav;
                            }
                        }
                        resolve(balanceDict);
                    }
                });
            });
        };

        // Booktick function bid ask price
        const getBookTicker = () => {
            return new Promise((resolve, reject) => {
                binance.bookTickers('BNBUSDT', (error, ticker) => {
                    if (error) {
                        reject(error);
                    } else {
                        resolve(ticker);
                    }
                });
            });
        };

        // Call checkFUNDS
        checkBalances()
            .then(balances => {
                console.log('Balances:', balances);
                return getBookTicker()
                    .then(ticker => {
                        console.log('Book Ticker:', ticker);
                        return checkFunds(apiKey, apiSecret, 'BNBFDUSD', 1, 593.000)
                            .then(funds => {
                                const result = {
                                    balances: balances,
                                    ticker: ticker,
                                    funds: funds
                                };
                                resolve(result);
                            });
                    });
            })
            .catch(error => {
                console.error('Error:', error);
                reject(error);
            });
    });
};

module.exports = executeTransaction;
