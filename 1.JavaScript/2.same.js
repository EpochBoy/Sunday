"use strict";
// Write a function which checks if the same amount of 'd' and 'k' is in the string.
//
// Examples:
// same("ddkk") => true
// same("dkkdd") => false
// same("ddkKm") => true
// same("dmm") => false
// same("eSss") => true // when no 'd' and 'k' is present should return true
exports.__esModule = true;
function same(str) {
    var strLength = str.length;
    if (strLength < 1) {
        return false;
    }
    var dcount = 0;
    var kcount = 0;
    // This isn't agnostic to capitalization
    // for (let i = 0; i < strLength; i++) {
    //     let char = str.charAt(i);
    //     if(char === 'd'){
    //         dcount++;
    //     }else if(char === 'k'){
    //         kcount++;
    //     }
    // }
    var daccept = ['d', 'D'];
    var kaccept = ['k', 'K'];
    var dacceptLength = daccept.length;
    var kacceptLength = kaccept.length;
    for (var i = 0; i <= strLength; i++) {
        var char = str[i];
        for (var i_1 = 0; i_1 < dacceptLength; i_1++) {
            var acpt = daccept[i_1];
            if (char === acpt) {
                dcount++;
            }
        }
        for (var i_2 = 0; i_2 < kacceptLength; i_2++) {
            var acpt = kaccept[i_2];
            if (char === acpt) {
                kcount++;
            }
        }
    }
    if (dcount === kcount) {
        return true;
    }
    else {
        return false;
    }
}
exports.same = same;
console.log(same("ddkk"));
console.log(same("dkkdd"));
console.log(same("ddkKm"));
console.log(same("dmm"));
console.log(same("eSss"));
