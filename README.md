<div align="center">
  <h1>
    node-labymod
  </h1>
  <p>
    <a href="https://discord.com/invite/uZ6q4jw"><img src="https://img.shields.io/discord/768055408542744587?color=7289da&logo=discord&logoColor=white?maxAge=3600" alt="Discord server" /></a>
    <a href="https://www.npmjs.com/package/node-labymod"><img src="https://img.shields.io/npm/v/node-labymod.svg?maxAge=3600" alt="NPM version" /></a>
    <a href="https://www.paypal.com/paypalme/janicblmn"><img src="https://img.shields.io/badge/donate-PayPal-F96854.svg" alt="PayPal" /></a>
  </p>
  <p>
    <a href="https://nodei.co/npm/node-labymod"><img src="https://nodei.co/npm/node-labymod.png?downloads=true&stars=true" alt="npm installnfo" /></a>
  </p>
</div>

## Table of contents

- [About](#about)
- [Installation](#installation)
- [Documentation](#documentation)
- [Examples](#examples)
- [Contributing](#contributing)

## About

node-labymod is a [Node.js](https://nodejs.org) module that allows you to easily fetch LabyMod information about a
minecraft user, get the daily shop, status of LabyMod and more!

- Based on Promises
- Light-Weight

## Installation

**Node.js 14.0.0 or newer is required.**

To install the module run `npm install node-labymod`.

## Documentation

- getAddons():
  - Returns: A list of available LabyMod addons and their details. 
- getCapeData(username):
  - Parameter: String (A minecraft username)
  - Returns: Information about a LabyMod users' cape
- getCosmetics(uuid):
  - Parameter: String (UUID in format of 36 characters)
  - Returns: A list of owned cosmetics by a user
- getEmotes(uuid):
  - Parameter: String (UUID in format of 36 characters)
  - Returns: A list of owned emotes by a user
- getRoles(uuid): 
  - Parameter: String (UUID in format of 36 characters)
  - Returns: A list of roles a user has
- getStickers(uuid): 
  - Parameter: String (UUID in format of 36 characters)
  - Returns: A list of owned stickers a user has
- getShop(type):
  - Parameter: String (raw, all, rare)
  - Returns: The daily emotes
- getStatus(): 
  - Returns: The status of LabyMod services
- getUser(uuid): 
  - Returns: All stats of a LabyMod user
- getVersions(): 
  - Returns: A list of available LabyMod versions
- reportCape(owner, reporter): 
  - Reports: A users' cape
- getPublicServers():
  - Reports: Returns a list of public servers

## Examples

```js
const LabyMod = require('node-labymod');

// Using Promises
LabyMod.getStatus().then(console.log); // Prints "OK" if everything is fine
LabyMod.getUser('70d39c44-adbd-442f-a0a3-f29fcb895699').then(console.log);
LabyMod.reportCape('DomeMilch', 'TiimDE')
        .then(() => console.log('Success!'))
        .catch(console.error);

// Or using ASYNC/AWAIT syntax
(async () => {
    console.log(await LabyMod.getStatus());
    console.log(await LabyMod.getUser('70d39c44-adbd-442f-a0a3-f29fcb895699'));

    try {
        await LabyMod.reportCape('DomeMilch', 'TiimDE');
    } catch (err) {
        console.error(err);
    }
})();
```

## Contributing

Before creating an issue, please ensure that it hasn't already been reported/suggested, and double-check the
documentation.
