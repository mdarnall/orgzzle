var ssl = process.env.USE_SSL || false
    , tlsOptions = require( './ssl.conf' )

var config = {
    server: {
        api: {
            host: '0.0.0.0',
            port: 1337,
            options: {
                labels: 'api',
                cors: true,
                views: {
                    engines: {
                        'ejs': require( 'ejs' )
                    },
                    path: './app/views',
                    isCached: false

                }
            }
        }

    },
    signedrequest: {
        clientSecret: ''
    },
    api: {
        username: '',
        password: ''
    },
    db:{
        host: '',
        port: '',
        user: '',
        password:'',
        database: ''
    }
}


if ( ssl ) {
    config.server.api.options.tls = tlsOptions
}

module.exports = config
