#jetpack-twitchbots
[![Dependency Status](https://dependencyci.com/github/freaktechnik/jetpack-twitchbots/badge)](https://dependencyci.com/github/freaktechnik/jetpack-twitchbots)

An API wrapper for [twitchbots.info](https://twitchbots.info) for the Firefox Add-on SDK.

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

See [twitchbots-base](https://www.npmjs.com/package/twitchbots-base) for a
documentation of all methods available on the `twitchbots` object.

## License
This project is licensed under the MIT License.
