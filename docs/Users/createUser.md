# How to create an user

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  const newUser = await Ptero.createUser({
    "email": "example10@example.com",
    "username": "exampleuser",
    "first_name": "Example",
    "last_name": "User"
  })

  console.log(newUser)
};

main()
```