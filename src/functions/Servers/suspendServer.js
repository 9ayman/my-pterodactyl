const getServer = require('./getServer');

module.exports = async function getUser(url, headers, query) {
    try {
        const response = await fetch(`${url}/api/application/servers/${(await getServer(url, headers, query)).attributes.id}/suspend`, {
          method: "POST",
          headers
        });
        return await response.text()
      } catch (err) {
        console.log(err);
      }
};
