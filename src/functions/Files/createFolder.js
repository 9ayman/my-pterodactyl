const getServer = require('../Servers/getServer');

module.exports = async function createFolder(url, headers, query, apiKey, body) {
    try {
        const server = await getServer(url, headers, query)
        const response = await fetch(`${url}/api/client/servers/${server.attributes.identifier}/files/create-folder`, {
          method: "POST",
          headers: {...headers, Authorization: `Bearer ${apiKey}`},
          body: JSON.stringify(body)
        });
        return await response.text()
      } catch (err) {
        console.log(err);
      }
};
