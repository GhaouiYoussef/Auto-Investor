const Binance = require('node-binance-api');



const checkB = (apiKey, apiSecret) => {
// Initialize Binance API with your API key and secret
const binance = new Binance().options({
  APIKEY: apiKey,
  APISECRET: apiSecret,
  family: 4
   });


// Retrieve the balances
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


// Example usage:
checkBalances()
  .then(balanceDict => {
    console.log(balanceDict);
  })
  .catch(error => {
    console.error('Error:', error);
  });
  
};
module.exports = checkB;