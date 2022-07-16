const config = require('../config/config.js');
const Twilio = require('twilio');

const { twilioAccountSid, twilioAuthToken, twilioPhoneNumber } = config;
const client = new Twilio(twilioAccountSid, twilioAuthToken);

// Below is an action that can successfully fetch the json file associated with an Message Sid
// This can be used to manually fetch media url and media file

client.v2010.messages('MMXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
    .fetch()
    .then(message => console.log(message.to));
