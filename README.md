# sleep3

Aysnc sleep, used on ES6+ (async/await).

Support string parameters like '10s' '5m', and numeric parameters millisecond.

[![NPM](https://nodei.co/npm/sleep3.png)](https://www.npmjs.com/package/sleep3/)

## Installation

```bash
npm install sleep3
```

## Usage

```js
const sleep = require('sleep3');

(async () => {
    console.log('begin');
    await sleep('10s');
    console.log('end');
})();
```

### Support string parameters

's','m','h','d'

like '3s','2m','1h35s'