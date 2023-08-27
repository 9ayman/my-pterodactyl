# How to get an user

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.getUser(1)); // User ID
  console.log(await Ptero.getUser("example@gmail.com"));
};

main()
```