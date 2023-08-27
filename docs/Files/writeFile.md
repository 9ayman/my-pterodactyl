# How to write a file on a server

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
    // Normal Files //

    await Ptero.writeFile("Server name", "apiKey", "./path.txt", JSON.stringify("Hello !"))

    // Compressed files

    await Ptero.writeFile("Server name", "apiKey", "./path.zip", new FormData().append('zipFile', new Blob([require('fs').readFileSync('./path.zip')]), { filename: 'zipFile.zip' }))

};

main()
```