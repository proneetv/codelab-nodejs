var fs = require("fs");

var data = fs.readFileSync('input.txt');

console.log(data.toString());
console.log("Last line of the code reached");
