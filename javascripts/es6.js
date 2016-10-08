"use strict";

console.log('es6');

//const
const a = 8;
console.log('a', a);
//a = 9;

//let

let b = 8;
console.log('b',b);
b = 12;
console.log('b2',b);

function varTest() {
  var x = 1;
  if (true) {
    x = 2;
    console.log('x',x);
  }
  console.log('x',x);
}

varTest();

function letTest() {
  let y = 1;
  if (true) {
    let y = 12;
    console.log('y',y);
  }
  console.log('y',y);
}

letTest();
//arrow functions

var sum = function () {
  let a=1, b=2; return a+b;
};

let sum1 = () => {
  let a=1, b=2; return a+b;
};

console.log(sum());
console.log(sum1());

var reflect = function (value) {
  return value;
};

let reflect2 = (value) => value;

console.log(reflect("es5 so yesterday"));
console.log(reflect2("es6 so today"));

let realSum = function (num1, num2) {
  return num1 + num2;
};

console.log("realSum", realSum(2,3));

var realSum2 = (num1,num2) => num1 + num2;

console.log('realSum2', realSum2(4,5));
//string templates

let m = "biteme";
console.log('m',m);

let n = `hello my name is ${m}`;
console.log('n',n);
//object literal property shorthand

let wow = "Hi there", es6 = "ES6", numNum = ()=>{console.log('howdy');};

let myOldObject = {
  wow:wow,
  es6:es6,
  numNum:numNum
};

console.log(myOldObject);

let myNewObject = {
  wow,
  es6,
  numNum
};

console.log(myNewObject);

//method properties

var e5Obj = {
  foo: function(){console.log('foo');},
  bar: function () {console.log('bar');}
};

console.log(e5Obj);

var es6Obj = {
  foo(){console.log('foo');},
  bar(){console.log('bar');}
};

console.log(es6Obj);
