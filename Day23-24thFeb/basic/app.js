const os = require('os');
const path = require('path');
const { writeFileSync, readFileSync, appendFileSync, unlinkSync } = require('fs');
const { findSum, findProduct, isPrime } = require("./myMod");

const version = os.version();
const totalmem = os.totalmem();
//path joining
const myFilePath = path.join('/home', '/basic', 'myFile.txt');
//read file
const readOp = readFileSync('./test.txt', 'utf-8');
//write file
writeFileSync('./test.txt', 'This is me..');
//append file
appendFileSync('./test.txt', ` Hello!`);
//append in a file using options
writeFileSync('./test.txt', ' IIEST Shibpur', {flag: 'a'});
//delete a file
// unlinkSync('./test.txt');

console.log(findSum(1,2,3));
console.log(findProduct(5,5));
console.log(isPrime(276));


// console.log(version);
// console.log(totalmem);
// console.log(myFilePath);