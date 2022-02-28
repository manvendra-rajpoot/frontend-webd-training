const fs = require("fs");

const readOp = fs.readFile("./test.txt", "utf8", (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});

const writeOp = fs.writeFile("./test.txt", " , Learning Node", { flag: 'a' }, (err, result) => {
    if(err) {
        console.log(err);
    }
    console.log(result);
});

console.log(writeOp);
console.log(readOp);
console.log("Hello World!");