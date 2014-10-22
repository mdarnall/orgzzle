/*
    Common setup for tests
 */

var chai = require('chai')

/* plugin for A+ http://chaijs.com/plugins/chai-as-promised */
chai.use(require('chai-as-promised'))

/* plugin for array expectations */
chai.use(require('chai-things'))

/* Make expect global for tests */
global.expect = chai.expect

/* make lodash global to all tests */
global._ = require('lodash-node')