const getServers = require('./getServers');

module.exports = async function getServer(url, headers, query) {
  const servers = await getServers(url, headers)
  return isNaN(query) ? servers.data.find((x) => x.attributes?.name == query) : servers.data.find((x) => x.attributes.id == query);
};
