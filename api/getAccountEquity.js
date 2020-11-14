
const axios = require('axios');
const env = require('../env_vars')
const signature = require('../signature')

module.exports = async (coin) => {
    const params = {
        coin
    }
    const {signature: hashedSignature, querystring} = signature(params, env.privateKey)
    const url = `https://api.bybit.com/v2/private/wallet/balance?${querystring}&sign=${hashedSignature}`
    const balance = await axios.get(url)
    return balance.data.result[coin].equity
}