require('dotenv').config({path: __dirname + '/.env'})


module.exports.apiPrivateKey = process.env['APIPrivateKey'];
module.exports.privateKey = process.env['PrivateKey'];