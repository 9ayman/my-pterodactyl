# How to all the users

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.getUsers());
};

main()
```