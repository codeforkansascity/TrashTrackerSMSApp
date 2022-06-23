const path = require("path");
const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
var io = require("socket.io");
const app = express();
const publicDirectoryPath = path.join(__dirname, "../public");
app.use(bodyParser.json());
app.use(express.static(publicDirectoryPath));

const server = http.createServer(app).listen(3000, () => {
  console.log("Express server listening on port 3000");
});

io = io(server);
app.use(function (req, res, next) {
  req.io = io;
  next();
});

io.on("connection", function (socket) {
  console.log("socket.io connection made");
});

app.post("/studio", (req, res) => {
  console.log(req.body);
  if (req.body[0].type == "com.twilio.studio.flow.execution.started") {
    req.io.send(JSON.stringify(req.body[0]));
    console.log("started");
  } else if (req.body[0].type == "com.twilio.studio.flow.execution.ended") {
    req.io.send(JSON.stringify(req.body[0]));
    console.log("ended");
  } else {
    req.io.send(JSON.stringify(req.body[0]));
    console.log(
      `${req.body[0].data.execution_sid} - ${req.body[0].data.name} - progress`
    );
  }
});
