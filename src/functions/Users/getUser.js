const getUsers = require('./getUsers');

module.exports = async function getUser(url, headers, query) {
  const users = await getUsers(url, headers)
  return isNaN(query) ? users.data.find((x) => x.attributes?.email == query) : users.data.find((x) => x.attributes.id == query);
};
