#jetpack-twitchbots
An API wrapper for twitchbots.info for the Firefox Add-on SDK

## Installation
Install this module into your extension by running the following command:
```bash
npm install --save jetpack-twitchbots
```

## Usage
```js
const twitchbots = require("jetpack-twitchbots");

twitchbots.getBot("freaktechnik").then((bot) => {
    if(bot.isBot) {
        console.log(bot.username, "is a bot.");
    }
    else {
        console.log(bot.username, "is not a bot");
    }
});
```
