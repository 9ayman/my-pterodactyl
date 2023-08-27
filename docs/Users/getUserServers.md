# How to get an user servers

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.getUserServers(1)); // User ID
  console.log(await Ptero.getUserServers("example@gmail.com"));
};

main()
```