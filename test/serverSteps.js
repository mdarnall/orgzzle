var Hapi = require('hapi')

var serverSteps = {

    createAPIServer : function(callback){
        var server = new Hapi.Server()
        server.pack.register({
                plugin: require('../lib'),
                options: {}
            }, function (err) {
                callback(err, server);
            }
        );
    }
}

module.exports = serverSteps