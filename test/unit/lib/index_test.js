require('../../testHelper')
var steps = require('../../serverSteps')

describe('orgzzle plugin', function () {

    it('can be registered', function (done) {
        steps.createAPIServer(function (err) {
            expect(err).to.not.exist
            done()
        })
    })
})