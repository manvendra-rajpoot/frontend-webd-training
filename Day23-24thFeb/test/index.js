const http = require("http");
const url = require("url");
const { readFileSync } = require("fs");

const parseUrl = url.parse("https://www.npmjs.com/search?q=nodemon", true);

const server = http.createServer((req,res) => {
    const path = req.url;
    // console.log(path);
    if(path=='/about'){
        res.writeHead(200, {
            'content-type': 'text/html',
        })
        // console.log("About");
        const myFile = readFileSync("./index.html");
        res.write(myFile);
        res.end();
    }
});
server.listen(4000);

// console.log(parseUrl);