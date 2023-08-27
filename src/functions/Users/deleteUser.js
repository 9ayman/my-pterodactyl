const getUser = require('./getUser');

module.exports = async function deleteUser(url, headers, query) {
  try {
    const userId = !isNaN(query) ? query : (await getUser(url, headers, query)).attributes.id;
    const response = await fetch(`${url}/api/application/users/${userId}`, {
      method: "DELETE",
      headers
    });
    return JSON.parse(await response.text());
  } catch (err) {
    console.log(err);
  }
};
