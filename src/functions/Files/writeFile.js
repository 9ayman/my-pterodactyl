const getServer = require('../Servers/getServer');

module.exports = async function createFolder(url, headers, query, apiKey, filePath, fileContent) {
    try {
        const server = await getServer(url, headers, query)
        const response = await fetch(`${url}/api/client/servers/${server.attributes.identifier}/files/write?file=${filePath}`, {
          method: "POST",
          headers: {...headers, Authorization: `Bearer ${apiKey}`},
          body: fileContent
        });
        return await response.text()
      } catch (err) {
        console.log(err);
      }
};
