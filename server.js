/**
 Server setup and start.
 Uses the manifest and pack configuration of HapiJS
 @see {@link http://hapijs.com/api#hapipack}
 */

var Hapi = require('hapi'),
    Path = require('path'),
    config = require('./config'),
    util = require('util'),
    manifest = {
        pack: {
            app: {
                config: config
            }
        },
        servers: [
            {
                port: config.server.api.port,
                host: config.server.api.host,
                options: config.server.api.options
            }
        ], plugins: {
            './lib': {}
        }
    };

Hapi.Pack.compose(manifest, {relativeTo: __dirname}, function (err, pack) {
    pack.start(function () {
        console.log(util.format('server running with config: %j', config))
    })

});