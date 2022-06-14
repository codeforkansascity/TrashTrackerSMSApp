# TrashTrackerSMS

[![License](https://img.shields.io/badge/License-MIT-brightgreen.svg)](https://opensource.org/licenses/MIT)

## Description

This app enables TrashTracker's Twilio phone number to communicate with external users.

## Prerequisites

- A Twilio account
- A Twilio phone number

## Installation

## Usage

## Local Testing

You need to install [ngrok](https://ngrok.com/download) to expose your local network to the public Internet for testing. After you install it and configure the authentification, enter the following command in your terminal:

```bash
$ ngrok http 1337
```

Once you acquire a public url from ngrok, copy and paste it in Twilio Console > Phone Numbers > Manage > Active Numbers > Configure > Messaging > A Message Comes In. You will need to update the url everytime you run that script.

## License

[MIT](https://opensource.org/licenses/MIT)
