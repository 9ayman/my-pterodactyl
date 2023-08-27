module.exports = async function getServers(url, headers) {
  try {
    const response = await fetch(`${url}/api/application/servers`, {
      method: "GET",
      headers
    });
    return JSON.parse(await response.text());
  } catch (err) {
    console.log(err);
  }
};
