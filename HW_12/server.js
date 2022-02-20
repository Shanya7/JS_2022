const http = require("http");
const date = new Date();
let message = `Your vote is accepted: ${date}`;

const headers = {
   'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': "GET",
    "Content-Type": "text/plain" 
  };
http.createServer(function (request, response) {
    response.writeHead(200, headers);
    response.end(message)
}).listen(8800)
    console.log("Server running at http://127.0.0.1:8800/");
