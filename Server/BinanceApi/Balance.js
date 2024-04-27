const Binance = require('node-binance-api');

// Initialize Binance API with your API key and secret
const binance = new Binance().options({
  APIKEY: 'xAqk8DRzB69ogy0OwTn6C7610TfbvPA8bYBiUHy9BUPw7d7Jg1IPKzsJHPJOdtkP',
  APISECRET: '4FARspZ8itm2nCy0jkcxMKweK4xza1tAhINifCmNZe7PN3xdcudsFOmm66w8uhqs',
  family: 4
});

// Retrieve the balances
const checkBalances = () => {
  binance.balance((error, balances) => {
    if (error) {
      console.error('error', error);
    } else {
      for (let coin in balances) {
        const coinav = balances[coin].available;
        if (coinav > 0) {
          console.info(`${coin} balance: `, coinav);
        }
      }
    }
  });
};
// Call the function to check balances
checkBalances();


