const getServers = require('../Servers/getServers');
const getUser = require('./getUser');

module.exports = async function getUserServers(url, headers, query) {

  const user = await getUser(url, headers, query)
  const servers = (await getServers(url, headers)).data
  return servers.filter((x) => x.attributes.user == user.attributes.id)
};
