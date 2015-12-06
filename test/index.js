'use strict';


const Code = require('code');
const Lab = require('lab');
const Find = require('../lib/index.js');



// Set-up lab
const lab = exports.lab = Lab.script();
const describe = lab.describe;
const it = lab.it;
const expect = Code.expect;

const obj = {
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


describe('Find', () => {

    it('should return undefined if no obj object is passed to function', (done) => {

        const result = Find();
        expect(result).to.be.undefined();
        done();

    });

    it('should return undefined if no key string is passed to function', (done) => {

        const result = Find(obj);
        expect(result).to.be.undefined();
        done();

    });

    it('should return values matching a key name', (done) => {

        const result = Find(obj, 'format');
        expect(result).to.be.an.array();
        expect(result).to.have.length(4);
        done();

    });

});
