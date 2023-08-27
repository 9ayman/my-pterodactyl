# How to update a server

```js
const { PteroManager } = require("./PteroManager.js")
const Ptero = new PteroManager(apiKey, url)

async function main() {
  const updatedServer = await Ptero.updateServer(1, {
    "name": "Building",
    "egg": 1,
    "docker_image": "quay.io/pterodactyl/core:java",
    "startup": "java -Xms128M -Xmx128M -jar server.jar",
    "environment": {
      "BUNGEE_VERSION": "latest",
      "SERVER_JARFILE": "server.jar"
    },
    "limits": {
      "memory": 128,
      "swap": 0,
      "disk": 512,
      "io": 500,
      "cpu": 100
    },
    "feature_limits": {
      "databases": 5,
      "backups": 1
    },
    "allocation": {
      "default": 17
    }
  })

  console.log(updatedServer)
};

main()
```