// This file shows the set-up process for using Twilio trial account. 
// Make sure to comment out other steps when you are using a specific step.
// Reference: https://www.twilio.com/docs/conversations/quickstart
const config = require('./config');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

// Step 1. Get Converation Service SID
// client.conversations.conversations
//   .create({ friendlyName: "My First Conversation" })
//   .then((conversation) => console.log(conversation.sid));

// Step 2. Get Chat Service SID
// const conversationServiceSid = "Enter the Converation SID you get from the last step here"
// client.conversations
//   .conversations("conversationServiceSid")
//   .fetch()
//   .then((conversation) => console.log(conversation.chatServiceSid));

// Step 3. Add an SMS participant to the conversation
// client.conversations
//   .conversations("conversationServiceSid")
//   .participants.create({
//     "messagingBinding.address": "+1816XXXXXXX",
//     "messagingBinding.proxyAddress": "+1816XXXXXXX",
//   })
//   .then((participant) => console.log(participant.sid));

// Step 4: Add a chat participant to the conversation
// (Optional for SMS conversation; Required for online chat conversation)
// client.conversations
//   .conversations("conversationServiceSid")
//   .participants.create({ identity: "testTwilio" })
//   .then((participant) => console.log(participant.sid));


