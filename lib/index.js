'use strict';


module.exports = function findKey (obj, key, results) {

    results = results || [];

    if (typeof obj !== 'object' || obj === null) {
        return;
    }

    if (typeof key !== 'string') {
        return;
    }

    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var subkeys = obj[name];
        if (typeof subkeys === 'object') {
            if (name === key) {
                results.push(subkeys);

            }
            findKey(subkeys, key, results);

        } else {

            if (name === key) {

                if (results.indexOf(subkeys) === -1) {
                    results.push(subkeys);
                }
            }
        }

    }

    return results;

};
