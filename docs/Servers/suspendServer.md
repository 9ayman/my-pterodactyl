# Suspend a server

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.suspendServer(1)); // Server ID
};

main()
```