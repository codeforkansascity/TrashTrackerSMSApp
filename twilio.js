// Download the helper library from https://www.twilio.com/docs/node/install
// Find your Account SID and Auth Token at twilio.com/console
// and set the environment variables. See http://twil.io/secure
const accountSid = "ACxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const authToken = "1bxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx";
const client = require("twilio")(accountSid, authToken);

// Get Converation SID
// client.conversations.conversations
//   .create({ friendlyName: "My First Conversation" })
//   .then((conversation) => console.log(conversation.sid));

// Get Conversation Service SID
// client.conversations
//   .conversations("CHxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//   .fetch()
//   .then((conversation) => console.log(conversation.chatServiceSid));

// Add an SMS participant to the conversation
// client.conversations
//   .conversations("CHxxxxxxxxxxxxxxxxxxxxxxxxxxx")
//   .participants.create({
//     "messagingBinding.address": "+18160000000",
//     "messagingBinding.proxyAddress": "+18160000000",
//   })
//   .then((participant) => console.log(participant.sid));

// Add a chat participant to the conversation
client.conversations
  .conversations("CHxxxxxxxxxxxxxxxxxxxxxxxxxxx")
  .participants.create({ identity: "testTwilio" })
  .then((participant) => console.log(participant.sid));
