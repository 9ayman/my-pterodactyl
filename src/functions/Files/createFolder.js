const getServer = require('../Servers/getServer');

module.exports = async function createFolder(url, headers, query, body) {
    try {
        const server = await getServer(url, headers, query)
        const response = await fetch(`${url}/api/client/servers/${server.attributes.identifier}/files/create-folder`, {
          method: "POST",
          headers,
          body: JSON.stringify(body)
        });
        return JSON.parse(await response.text())
      } catch (err) {
        console.log(err);
      }
};
