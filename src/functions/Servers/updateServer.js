const getServer = require("./getServer");

module.exports = async function updateUser(url, headers, query, newData) {
  try {
    const response = await fetch(`${url}/api/application/servers/${(await getServer(query)).attributes.id}/details`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(newData)
    });
    return JSON.parse(await response.text());
  } catch (err) {
    console.log(err);
  }
};
