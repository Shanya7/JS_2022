const http = require("http");
const val = require("./personalmodule.js")
http.createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(`${val.printMessage()}`)
    response.end()}).listen(8000)
    console.log("Server running at http://127.0.0.1:8000/");