'use strict';

const Type = require('basic-utils');

const internals = {};

module.exports = exports = internals.findKey = (obj, key, results) => {

    results = results || [];

    if (!Type.isObj(obj) || Type.isUndefined(obj)) {
        return;
    }

    if (!Type.isString(key)) {
        return;
    }

    const keys = Object.keys(obj);
    for (let i = 0; i < keys.length; ++i) {
        const name = keys[i];
        const subkeys = obj[name];
        if (typeof subkeys === 'object') {
            if (name === key) {
                results.push(subkeys);
            }
            internals.findKey(subkeys, key, results);
        }
        else {
            if (name === key) {
                if (results.indexOf(subkeys) === -1) {
                    results.push(subkeys);
                }
            }
        }
    }
    return results;
};
