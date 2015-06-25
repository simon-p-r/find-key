#find-key

Finds matching value of supplied key inside deep nested object

[![Build Status](https://travis-ci.org/simon-p-r/find-key.svg?branch=master)](https://travis-ci.org/simon-p-r/find-key)
[![Current Version](https://img.shields.io/npm/v/find-key.svg)](https://www.npmjs.org/package/find-key)
![devDependencies](http://img.shields.io/david/dev/simon-p-r/find-key.svg)


### Install

````ShellSession

npm install find-key

````

### Usage

#### find(object, key, results)

object is the object your are looking for key inside, key is the name of the key your are lookign for and results is an array to store the returned key and values from function

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

var res = Find(obj, 'format', []);

console.log(res); // should equal an array with the following values ['lookup', 'dbRef']

```
