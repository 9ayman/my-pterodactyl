# How to create a folder on a server

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  await Ptero.createFolder("Building", "api key (application)", { root: "/lol", name: "lol2"})
};

main()
```