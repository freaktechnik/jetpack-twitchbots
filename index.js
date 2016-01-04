/**
 * Basic SDK wrapper around the twitchbots-base package
 * @author Martin Giger
 * @license MIT
 * @module jetpack-twitchbots
 */
"use strict";

const { Request } = require("sdk/request");
const TwitchBots = require("twitchbots-base");

const requestWrapper = (url) => {
    return new Promise((resolve, reject) => {
        let req = new Request({
            url,
            onComplete: (response) => {
                if(response.status == 200) {
                    resolve(response.json);
                }
                else {
                    reject({
                        code: response.status,
                        text: response.text
                    });
                }
            }
        });   
        req.get();     
    });
};

module.exports = new TwitchBots({
    request: requestWrapper
});
