var decode = require('salesforce-signed-request')
    , AccountsAPI = require('./accountsAPI')
    , AccountsDB = require('./accountsDB')

var routes = [
    {
        method: 'GET',
        path: '/v2/accounts',
        handler: function(request, reply){
            AccountsDB.all().then(function(accounts){
                reply(accounts)
            }, function(err){
                reply(err)
            })
        }
    },

    {
        method: 'GET',
        path: '/accounts',
        handler: function(request, reply){
            AccountsAPI.all().then(function(accounts){
                reply(accounts)
            }, function(err){
                reply(err)
            })
        }
    },
    {
        method: 'POST',
        path: '/signedrequest',
        handler: function (request, reply) {
            var canvasContext,
                appSecret = this.config.signedrequest.clientSecret;

            canvasContext = decode(request.payload.signed_request, appSecret);

            if (canvasContext instanceof Error) {
                return reply(400, canvasContext.message);
            }

//            reply(canvasContext);
            reply.view('home', {canvasContext: canvasContext})
        }
    },
    {
        method: 'GET',
        path: '/public/{param*}',
        handler: {
            directory: {
                path: './public'
            }
        }
    },
    {
        method: 'GET',
        path: '/app/app.js',
        handler: {
            file: './app/app.js'
        }
    },
    {
        method: 'GET',
        path: '/bower_components/{param*}',
        handler: {
            directory: {
                path: './bower_components'
            }
        }
    }
];

module.exports = routes;