# TrashTrackerSMS

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description

Trash Tracker is a simple, lightweight system that allows residents and staff of the Lykins neighborhood to report illegal dumping with a simple text message.

## Prerequisites

- [A Twilio account](http://www.twilio.com/referral/7fB3Je)
- [A Twilio phone number](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account#get-your-first-twilio-phone-number)

## Installation

To import our Twilio Studio flow, go to your Twilio studio and create a new flow. Select **Import from JSON** from the list of templates. In the next window, you can paste the Flow JSON from [flow.json](./public/assets/flow.json).

<!-- Next, click on the Trigger Widget on the top and copy your webhook url from the Inspector Panel on the right hand. It should look like this:

```
https://webhooks.twilio.com/v1/Accounts/{AccountSid}/Flows/{FlowSid}
``` -->

Next, navigate to the [Active Numbers section of the Twilio Console](https://www.twilio.com/console/phone-numbers/incoming) and click on the number you’d like to connect to the Flow. Go to the **Messaging section** and select your flow under **A Message Comes In**.

Here is what the place looks like:
![The Messaging section in the configuration menu](https://twilio-cms-prod.s3.amazonaws.com/images/Screen_Shot_2022-02-09_at_7.42.46_PM.width-1600.png)

## Usage

Any users can send a text message to your Twilio phone number and start the conversation! The following photo shows an example:

![Example of text communication](./public/images/example_text_communication.jpg)

After the conversation is complete, you can see the object, location, and reporting number logged in the command line.

![Example of log messages](./public/images/example_console_log.png)

## Local Development

To test local files, run the following command:

```bash
$ node ./routes/flow.js
```

You also need a webhook url on the public Internet. To do that, you need to install [ngrok](https://ngrok.com/download) to expose your local network to the public Internet. After you install it and configure the authentification, open a second terminal and enter the following command:

```bash
$ ngrok http 1337
```

Once you acquire a forwarding url from ngrok, copy and paste it in http_request_english and http_request_spanish widgets in your Twilio Studio flow. You will need to update the url everytime you run that script. The below photo shows an example.

![Example of http_request widget](./public/images/example_http_request_widget.jpg)

To extract exif data from existing images, add image path to [extract-exif.js](./extract-exif.js), and run the following command:

```bash
$ node extract-exif.js
```

You will see exif data in the command line.


## License

[MIT](https://opensource.org/licenses/MIT)
