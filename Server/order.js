const { Spot } = require('@binance/connector');

const checkFunds = async (apiKey, apiSecret, symbol, quantity, price) => {
  try {
    const client = new Spot(apiKey, apiSecret);
    // Fetch account balances
    const response = await client.account();
    const balances = response.data.balances;

    // Find the balance of the  asset USDT 
    const usdtBalance = balances.find(asset => asset.asset === 'FDUSD');
    console.log('Balances:', usdtBalance);

    // Calculate the total cost of the order
    const totalCost = quantity * price;

    // Check if there are enough funds
    if (usdtBalance && parseFloat(usdtBalance.free) >= totalCost) {
      // There are enough funds, place the order
      const orderResponse = await client.newOrder(symbol, 'BUY', 'LIMIT', {
        price: price.toString(), 
        quantity: quantity,
        timeInForce: 'GTC'
      });
      console.log('Order placed successfully:', orderResponse.data);
      orderRes=orderResponse.data
      return { orderRes, usdtBalance };
    } else {
      // Insufficient funds
      console.log('Insufficient funds to place the order');
      return { error: 'Insufficient funds',usdtBalance };
    }
  } catch (error) {
    console.error('Error:', error);
    throw error; // Re-throw any caught errors
  }
};

module.exports = checkFunds;

