/**
 *
 * @type {exports}
 */

var routes = require('./routes'),
    db = require('./db')
/**
 * Register the orgzzle-api hapijs plugin
 * @see {@link http://hapijs.com/tutorials/plugins }
 */
exports.register = function (plugin, options, next) {

    var connection = db.connect()

    /** set this properties for each request **/
    plugin.bind({
        config: plugin.app.config,
        db: connection
    });

    /** register our rotes **/
    plugin.route(routes)

    /** continue **/
    next()
}

exports.register.attributes = {
    pkg: require('../package.json')
}