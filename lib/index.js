"use strict";
exports.__esModule = true;
exports.printOneToHundred = void 0;
function printOneToHundred() {
    var num;
    for (num = 1; num <= 100; num++) {
        console.log(num);
    }
}
exports.printOneToHundred = printOneToHundred;
printOneToHundred();
var arr = Array.from(Array(100).keys()).map(function (i) { return i + 1; });
console.log(arr);
