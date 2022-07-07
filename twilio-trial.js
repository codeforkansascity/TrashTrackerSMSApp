// This file shows the set-up process for using Twilio trial account
const config = require('./config');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

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


