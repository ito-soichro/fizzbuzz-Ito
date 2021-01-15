"use strict";
exports.__esModule = true;
exports.printResult = exports.printOneToHundred = exports.printFizzBuzz = void 0;
var printFizzBuzz = function (num) {
    var fizzbuzz;
    if (num % 15 === 0) {
        return fizzbuzz = 'Fizz Buzz';
    }
    if (num % 5 === 0) {
        return fizzbuzz = 'Buzz';
    }
    if (num % 3 === 0) {
        return fizzbuzz = 'Fizz';
    }
    if (num % 15 != 0 && num % 3 != 0 && num % 5 != 0) {
        return fizzbuzz = num;
    }
};
exports.printFizzBuzz = printFizzBuzz;
var printOneToHundred = function () {
    var arr = [];
    for (var i = 1; i <= 100; i++) {
        arr.push(exports.printFizzBuzz(i));
    }
    return arr;
};
exports.printOneToHundred = printOneToHundred;
var printResult = function () {
    var result = exports.printOneToHundred().join();
    return result;
};
exports.printResult = printResult;
console.log(exports.printResult());
