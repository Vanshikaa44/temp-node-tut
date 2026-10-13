// commonjs- every file is module (by default)
// modules- encapsulated code (only share minimum)
const names= require('./4-name')
const sayHi= require ('./5-utils')
const data= require('./6-alternative')
require('./7-mindgrenade')
// console.log(names)
// console.log(data)
// sayHi('susan');
// sayHi(names.john);
// sayHi(names.peter);
const { log } = require('console')