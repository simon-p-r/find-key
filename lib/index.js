'use strict';

const internals = {};

module.exports = exports = internals.findKey = (obj, key, results) => {

    results = results || [];

    if (obj === null || typeof obj === 'undefined') {
        return;
    }

    if (typeof key !== 'string') {
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
