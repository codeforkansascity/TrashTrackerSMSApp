# TrashTrackerSMSApp

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Table of Contents
- [Description](#description)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Usage](#usage)
- [Local Development](#local-development)
- [Other Usages](#other-usages)
- [Credits](#credits)
- [License](#license)

## Description

Trash Tracker is a simple, lightweight system that allows residents and staff of the Lykins neighborhood to report illegal dumping with a simple text message. TrashTrackerSMSApp is one of the three repositories it uses. This app enables your Twilio number to receive and respond to MMS messages from the public. It allows bilingual (English and Spanish) report. Currently, the reported information will be logged in the command line. App users can also decode EXIF data stored in images. The final goal is to decode geolocation data, store conversation, location, and image in database, and display them on our website for admin and staff to track illegal dumping.

## Prerequisites

- [A Twilio account](http://www.twilio.com/referral/7fB3Je)
- [A Twilio phone number](https://www.twilio.com/docs/usage/tutorials/how-to-use-your-free-trial-account#get-your-first-twilio-phone-number)

(Note: If you are using a free trial account from Twilio, your Twilio number may only message one verified phone number. See more limitations [here](https://support.twilio.com/hc/en-us/articles/360036052753-Twilio-Free-Trial-Limitations). You can refer to [twilio-trial.js](./twilio-trial.js) to set up a verified phone number.)

## Installation

To import our Twilio Studio flow, go to your Twilio studio and create a new flow. Select **Import from JSON** from the list of templates. In the next window, you can paste the Flow JSON from [flow.json](./public/assets/flow.json). Then, edit the urls in http_request_english and http_request_spanish widgets to be the url that you'd like your http requests to be sent to.

<!-- Next, click on the Trigger Widget on the top and copy your webhook url from the Inspector Panel on the right hand. It should look like this:

```
https://webhooks.twilio.com/v1/Accounts/{AccountSid}/Flows/{FlowSid}
``` -->

Next, navigate to the [Active Numbers section of the Twilio Console](https://www.twilio.com/console/phone-numbers/incoming) and click on the number you’d like to connect to the Flow. Go to the **Messaging section** and select your flow under **A Message Comes In**.

Here is what the place looks like:
![The Messaging section in the configuration menu](https://twilio-cms-prod.s3.amazonaws.com/images/Screen_Shot_2022-02-09_at_7.42.46_PM.width-1600.png)

## Usage
1. Install dependencies

    ```bash
    npm install -g yarn && \
    yarn install
    ```

2. Copy the sample configuration file and edit it to match your configuration

   ```bash
   $ cp .env.EXAMPLE .env
   ```
   You can find your `TWILIO_ACCOUNT_SID` and `TWILIO_AUTH_TOKEN` in your [Twilio Account Settings](https://www.twilio.com/console).

3. Run the application

    ```bash
    $ node ./routes/flow.js
    ```

Any users can send a text message to your Twilio phone number and start the conversation (if you have upgraded your Twilio account)! The following photo shows an example:

![Example of text communication](./public/images/example_text_communication.jpg)

After the conversation is complete, you can see the object, location, and reporting number logged in the command line.

![Example of log messages](./public/images/example_console_log.png)

To extract exif data from existing images, add image path and name to [extract-exif.js](./extract-exif.js), and run the following command:

```bash
$ node extract-exif.js
```

You will see geolocation data in the command line:

![Example of exif data](./public/images/example_exif.png)

## Local Development

You will need a webhook url on the public Internet. To do that, you need to install [ngrok](https://ngrok.com/download) to expose your local network to the public Internet. After you install it and configure the authentification, open a second terminal and enter the following command:

```bash
$ ngrok http 1337
```

Once you acquire a forwarding url from ngrok, copy and paste it in http_request_english and http_request_spanish widgets in your Twilio Studio flow. You will need to update the url everytime you run that script. The below photo shows an example.

![Example of http_request widget](./public/images/example_http_request_widget.png)

## Other Usages

If you want to design your own app without using Twilio flow, here are some resources: 
1. To initiate or send a custom message, enter:
    ```bash
    $ node ./mms-send.js
    ```
2. To fetch a message sent to your Twilio number, enter:
    ```bash
    $ node ./mms-fetch.js
    ```
3. To set up an auto-generated reply to messages sent to your Twilio number, enter: 
    ```bash
    $ node ./routes/sms.js
    ```
4. To send an image to your webhook url, enter the following command and go to [http://localhost:1337/](http://localhost:1337/) to see the images received.

    ```bash
    $ yarn start
    ```

## Credits
Twilio documentations have been tremendous help for this project, especially the ones on [Programmable SMS](https://www.twilio.com/docs/sms/quickstart/node#sign-up-for-twilio-and-get-a-twilio-phone-number) and on [Twilio Studio](https://www.twilio.com/docs/studio/user-guide/get-started). The 4th usage of "other usages" of this repository uses almost all code from the Twilio repository [receive-mms-node](https://github.com/TwilioDevEd/receive-mms-node).

## License

[MIT](https://opensource.org/licenses/MIT)
