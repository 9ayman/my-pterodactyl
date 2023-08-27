# How to create an user

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  const newData = await Ptero.createUser("example@gmail.com" || 1 /* User ID */, {
    "email": "newexample@gmail.com",
    "username": "New username !",
    "first_name": "New name",
    "last_name": "New last name"
  })

  console.log(newData)
};

main()
```