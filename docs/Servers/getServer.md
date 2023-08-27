# How to get a server

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.getServer(1)); // Server ID
};

main()
```