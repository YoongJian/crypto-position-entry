const axios = require('axios');


module.exports = async(coin) => {
  const url = `https://api.bybit.com/v2/public/tickers?symbol=${coin}USDT`

  const price = await axios.get(url)
  return price.data.result[0].last_price
}