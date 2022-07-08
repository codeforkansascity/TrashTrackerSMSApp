// This file can successfully log data and image URL from Twilio Studio Flow in the command line
// Note: make sure you have configured webhook url in your Twilio console and your flow

const config = require('../config');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

const express = require("express");

const app = express();
const PORT = 1337;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
  res.send("Welcome to Trash Tracker!");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.end();
});

app.listen(PORT, () => {
  console.log(`Express server listening on port ${PORT}`);
});
