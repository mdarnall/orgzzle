var Connection = require('jsforce').Connection,
    config = require('../config')

exports.all = function(){
    var connection = new Connection(),
        apiConfig = config.api

    return connection.login(apiConfig.username, apiConfig.password)
        .then(function(){
            return connection.sobject('Account')
                .find({}, {'Id': 1, 'Name': 1})
                .sort({ Name: 1})
                .then()
        })
}