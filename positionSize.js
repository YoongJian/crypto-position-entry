
module.exports = (accountSize, maxRisk, differenceUSD) => {
    const maxRiskUSD = accountSize * maxRisk/100
    const leverage = maxRiskUSD / differenceUSD
  
    return leverage
  }
  