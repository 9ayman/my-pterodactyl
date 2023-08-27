const getUser = require("../Users/getUser");

module.exports = async function createServer(url, headers, query, server) {
    try {
      const response = await fetch(`${url}/api/application/servers`, {
        method: "POST",
        headers,
        body: JSON.stringify({...server, user: (await getUser(url, headers, query)).attributes.id})
      });
      return JSON.parse(await response.text());
    } catch (err) {
      console.log(err);
    }
  };
  