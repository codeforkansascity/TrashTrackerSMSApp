// Below can successfully reply a auto-generated message sent to Twilio number
const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

app.post("/incoming", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("Hi, I am having a lunch. I will reply you asap. Thanks.");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});