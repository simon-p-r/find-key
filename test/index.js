
// Load modules

var Code = require('code');
var Lab = require('lab');
var Find = require('../lib/index.js');



// Set-up lab
var lab = exports.lab = Lab.script();
var describe = lab.describe;
var it = lab.it;
var expect = Code.expect;

var obj = {
  type: 'object',
  properties: {
        format: {
            type: 'string',
            format: 'lookup'
        },
        extra: {
            type: 'string',
            format: 'lookup'
        },
        test: {
            type: 'string',
            format: {
                test: 'dbRef'
            }
        }
  },
  additionaProperties: false,
  format: 'dbRef',
  title: 'country schema'

};


describe('Find', function () {

    it('should return undefined if no obj object is passed to function', function (done) {

        var result = Find();
        expect(result).to.be.undefined();
        done();

    });

    it('should return undefined if no key string is passed to function', function (done) {

        var result = Find(obj);
        expect(result).to.be.undefined();
        done();

    });


    it('should return values matching a key name', function (done) {


        var result = Find(obj, 'format');
        expect(result).to.be.an.array();
        expect(result).to.have.length(4);
        done();


    });

});
