var knex = require( 'knex' )
    , config = require('../config').db

exports.connect = function(){

    return knex({
        client: 'pg',
        connection: {
            host: config.host,
            port: config.port,
            user: config.user,
            password: config.password,
            database: config.database,
            ssl: true
        }
    })
}
