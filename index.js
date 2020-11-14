

const getCoinPrice = require('./api/getCoinPrice')
const calculatePositionSize = require('./positionSize')
const getAccountEquity = require('./api/getAccountEquity')


const short = 'short'
const long = 'long'
const maxRisk = 10 // %

const fn = async (coin, bidPrice, slPrice, orderType) => {
  const accountSize = await getAccountEquity('USDT')
  const price = await getCoinPrice(coin)

  let tpUSD = 0
  let differenceUSD = 0
  let side = ''
  differenceUSD = Math.abs(bidPrice - slPrice)
  if (slPrice > bidPrice) {
    side = short
    tpUSD = bidPrice - (differenceUSD*2)
  } else {
    side = long
    tpUSD = bidPrice + (differenceUSD*2)      
  }

  const finalbtc = calculatePositionSize(accountSize,maxRisk,differenceUSD)
  if (orderType === 'usdt') {
    console.log('Position Size: ',finalbtc)
  } else {
    console.log('Position Size: ', Math.round(finalbtc * price))
  }
  console.log('entry', bidPrice)
  console.log('TP ', tpUSD)
  console.log('SL ', slPrice)
}

fn('BTC', 15750, 15709, 'usdt').then(res => {})