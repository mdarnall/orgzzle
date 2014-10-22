var config = require('../config').api

exports.open = function(connection){
    return connection.login(config.username, config.password)
}