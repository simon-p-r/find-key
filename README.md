#find-key

Finds matching value of supplied key inside deep nested object

[![Current Version](https://img.shields.io/npm/v/find-key.svg?maxAge=1000)](https://www.npmjs.org/package/find-key)
[![dependency Status](https://img.shields.io/david/simon-p-r/find-key.svg?maxAge=1000)](https://david-dm.org/simon-p-r/find-key)
[![devDependency Status](https://img.shields.io/david/dev/simon-p-r/find-key.svg?maxAge=1000)](https://david-dm.org/simon-p-r/find-key)
[![Build Status](https://travis-ci.org/simon-p-r/find-key.svg?branch=master)](https://travis-ci.org/simon-p-r/find-key)
[![Windows Build Status](https://img.shields.io/appveyor/ci/simon-p-r/find-key/master.svg?label=windows&style=flat-square&maxAge=2592000)](https://ci.appveyor.com/project/simon-p-r/find-key)
[![Coveralls](https://img.shields.io/coveralls/simon-p-r/find-key.svg?maxAge=1000)](https://coveralls.io/github/simon-p-r/find-key)


### Install

```bash
npm install find-key
```

### Usage

#### find(object, key)

+ object to find the key inside
+ key is the string being searched for

The return value will be an array of values matching the key name supplied

### Example

```javascript
const Find = require('find-key');

const obj = {
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

const res = Find(obj, 'format');

console.log(res); // should equal an array with the following values ['lookup', 'dbRef']
```
