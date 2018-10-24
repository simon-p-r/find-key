'use strict';

const internals = {};

module.exports = exports = internals.findKey = (jsObject, requiredKey, results = []) => {

    if (((typeof jsObject) !== 'object') || ((typeof requiredKey) !== 'string')) {
        return undefined;
    }

    for (const key in jsObject) {
        const value = jsObject[key];
        if (key === requiredKey && !results.includes(value)) {
            results.push(value);
        }

        if ((typeof value) === 'object') {
            results = internals.findKey(value, requiredKey, results);
        }
    }

    return results;
};
