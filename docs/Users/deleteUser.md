# How to delere an user

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  console.log(await Ptero.deleteUser(1)); // User ID
  console.log(await Ptero.deleteUser("example@gmail.com"));
};

main()
```