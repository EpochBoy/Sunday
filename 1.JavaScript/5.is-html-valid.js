// Write a function that takes a string of html, and determines if the order of the html tags is valid.
// It should return true if the string is valid, and false if it's invalid.
// All input strings will be nonempty, and will only consist of these html tags: <div><span><h1>.
//
// What is considered Valid? A string of html tags is considered valid if all tags are closed with the correct tag.
//
// Examples
// "<div></div>"   =>  True
// "<div><span></span></div>"   =>  True
// "<div></span>"       =>  False
// "<div>"     =>  False
// "<div><div><span></span></div></h1>" =>  False


// 2 different implementations, can either be run with node from terminal or the last function can be run using the browsers js console.

const jsdom = require('jsdom').JSDOM;
// const isHtml = require('is-html');

let html = ''+
'<!DOCTYPE html>'+'<html>'+'</html>',

dom = new jsdom(html);

function isHTMLValid(html){
    var myDoc = dom.window.document.createElement('div');
    myDoc.innerHTML = html;
    return(myDoc.innerHTML === html);
}

let test1 = "<div></div>";
let test2 = "<div><span></span></div>";
let test3 = "<div></span>";
let test4 = "<div>";
let test5 = "<div><div><span></span></div></h1>";

console.log(isHTMLValid(test1));
console.log(isHTMLValid(test2));
console.log(isHTMLValid(test3));
console.log(isHTMLValid(test4));
console.log(isHTMLValid(test5));

// // run below in Browser
// function isHTMLValid(html) {
//     var doc = document.createElement('div');
//     doc.innerHTML = html;
//     return(doc.innerHTML === html);
// }

// console.log(isHTMLValid("<div></div>"));
// console.log(isHTMLValid("<div><span></span></div>"));
// console.log(isHTMLValid("<div></span>"));
// console.log(isHTMLValid("<div>"));
// console.log(isHTMLValid("<div><div><span></span></div></h1>"));
