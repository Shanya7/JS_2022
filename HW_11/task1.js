const http = require("http");
const os = require("os");
const path = require("path");

const operatingSystem = `OS type: ${os.type()}`;
const username = `Current user name: ${os.userInfo().username}`;
const workTime = `System work time: ${os.uptime()/60} minutes`;
const currentWorkDirectory = `System work directory: ${path.dirname(
  "HW_11/task1.js"
)}`;
const fileName = `Server file name: ${path.basename("HW_11/task1.js")}`;

http
  .createServer(function (request, response) {
    response.writeHead(200, { "Content-Type": "text/html" });
    response.write(
      "<h1>System information</h1>\n" +
        username +
        "<br>\n" +
        operatingSystem +
        "<br>\n" +
        workTime +
        "<br>\n" +
        currentWorkDirectory +
        "<br>\n" +
        fileName
    );
    response.end();
  })
  .listen(5000);
console.log("Server running at http://127.0.0.1:5000/");
