// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const conversationServiceSid = process.env.TWILIO_CONVERSATION_SERVICE_SID;
const client = require("twilio")(accountSid, authToken);

// Get Converation SID
// client.conversations.conversations
//   .create({ friendlyName: "My First Conversation" })
//   .then((conversation) => console.log(conversation.sid));

// Get Conversation Service SID
// client.conversations
//   .conversations("conversationServiceSid")
//   .fetch()
//   .then((conversation) => console.log(conversation.chatServiceSid));

// Add an SMS participant to the conversation
// client.conversations
//   .conversations("conversationServiceSid")
//   .participants.create({
//     "messagingBinding.address": "+1816XXXXXXX",
//     "messagingBinding.proxyAddress": "+1816XXXXXXX",
//   })
//   .then((participant) => console.log(participant.sid));

// Add a chat participant to the conversation
// client.conversations
//   .conversations("conversationServiceSid")
//   .participants.create({ identity: "testTwilio" })
//   .then((participant) => console.log(participant.sid));

// Send a message from Twilio number to a conversation participant (To add an SMS participant, see above)
// client.messages
//   .create({
//     body: "Hi, I am sending a message from Twilio phone number.",
//     from: "+1816XXXXXXX",
//     to: "+1816XXXXXXX",
//   })
//   .then((message) => console.log(message.sid));

// Reply a message sent to Twilio number
const http = require("http");
const express = require("express");
const MessagingResponse = require("twilio").twiml.MessagingResponse;

const app = express();

app.post("/sms", (req, res) => {
  const twiml = new MessagingResponse();

  twiml.message("Hi, I am having a lunch. I will reply you asap. Thanks.");

  res.writeHead(200, { "Content-Type": "text/xml" });
  res.end(twiml.toString());
});

http.createServer(app).listen(1337, () => {
  console.log("Express server listening on port 1337");
});
