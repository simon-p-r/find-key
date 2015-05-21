'use strict';

var Utils = require('util');

module.exports = function findKey (obj, key, results) {

    if (!obj) {
        return;
    }

    var keys = Object.keys(obj);

    for (var i = 0; i < keys.length; i++) {
        var name = keys[i];
        var subkeys = obj[keys[i]];
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
