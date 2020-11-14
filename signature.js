const crypto = require('crypto');
const env = require('./env_vars')

const timestamp = Date.now();

module.exports = (customParameters, secret) => {
    const defaultParams = {
        "timestamp":timestamp,
        "api_key" : env.apiPrivateKey,        
    }
    const parameters = {
        ...defaultParams,
        ...customParameters
    }

    let orderedParams = "";
	Object.keys(parameters).sort().forEach(function(key) {
        orderedParams += key + "=" + parameters[key] + "&";
	});
    orderedParams = orderedParams.substring(0, orderedParams.length - 1);
    
	return {
        'signature': crypto.createHmac('sha256', secret).update(orderedParams).digest('hex'),
        'querystring': orderedParams
    } ;
}