#find-key

Finds matching value of supplied key inside deep nested object

[![Build Status](https://travis-ci.org/simon-p-r/find-key.svg?branch=master)](https://travis-ci.org/simon-p-r/find-key)
[![Current Version](https://img.shields.io/npm/v/find-key.svg)](https://www.npmjs.org/package/find-key)

### Install

````ShellSession

npm install find-key

````

### Usage

#### find(object, key)

+ object to find the key inside
+ key is the string being searched for

The return value will be an array of values matching the key name supplied

### Example

```js

var Find = require('find-key');

var obj = {
  type: 'object',
  properties: {
        first: {type: 'string', format: 'lookup'},
        extra: {type: 'string', format: 'lookup'},
        test: {type: 'string', format: 'dbRef'},
  },
  additionaProperties: false,
  format: 'dbRef',
  title: 'country schema',

};

var res = Find(obj, 'format');

console.log(res); // should equal an array with the following values ['lookup', 'dbRef']

```
