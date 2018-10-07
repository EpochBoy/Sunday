"use strict";
// Write a function which
//     Multiplies each number by itself.
//     Add them all together.
//     Take the square root of the result.
//     Divide by two.
//     Example
// math(65, 60, 75, 55, 60, 63, 64, 45) === 86
exports.__esModule = true;
function math() {
    var numbers = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        numbers[_i] = arguments[_i];
    }
    var secondExponent = 0;
    numbers.forEach(function (element) {
        secondExponent += element * element;
    });
    // I just had to test before rounding here due to differing results. The result is === 86.84037079607617 so if rounded should be 87 and not 86.
    // console.log(Math.sqrt(secondExponent)/2);
    // This is what i would do.
    var result = Math.round(Math.sqrt(secondExponent) / 2);
    // This gives the desired result.
    // var resultCorrect = Math.trunc(Math.sqrt(secondExponent)/2); 
    // Trunc not accepted in TypeScript so i used floor instead.
    var resultCorrect = Math.floor(Math.sqrt(secondExponent) / 2);
    console.log("I've been rounded: " + result);
    console.log("I've been truncated/floored: " + resultCorrect);
}
exports.math = math;
math(65, 60, 75, 55, 60, 63, 64, 45);
