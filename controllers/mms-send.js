const config = require('../config/config.js');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

// Below is an action that can successfully send a message from a Twilio number to a Twilio or non-Twilio number
// Note: the "to" and "from" number can't be the same.
client.messages
  .create({
    to: twilioPhoneNumber,
    from: twilioPhoneNumber,
    body: 'Welcome to TrashTracker!',
    mediaUrl: 'https://freesvg.org/img/cyberscooty-clean_man.png',
  })
  .then((message) => console.log("message.sid: " + message.sid));