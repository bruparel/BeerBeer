/**
 * Created by Bharat on 3/24/14.
 * Description: Ridiculous tests.
 */

var should = require('should');
var assert = require('assert');

describe ('Test Framework', function() {
    it('should have Mocha installed and running.', function() {
        assert.equal (true, true);
    })
    it('should have the should library installed and running for fluent testing', function() {
        true.should.eql (true);
    })
})