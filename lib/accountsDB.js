var db = require('./db')

exports.all = function getAll(){

    return db.connect().select([
        'sfid',
        'name'
    ]).table('salesforce.account')
        .then()
}
