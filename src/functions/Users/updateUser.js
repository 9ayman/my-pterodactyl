const getUser = require('./getUser');

module.exports = async function updateUser(url, headers, query, newData) {
  try {
    const userId = !isNaN(query) ? query : (await getUser(url, headers, query)).attributes.id;
    const response = await fetch(`${url}/api/application/users/${userId}`, {
      method: "PATCH",
      headers,
      body: JSON.stringify(newData)
    });
    return JSON.parse(await response.text());
  } catch (err) {
    console.log(err);
  }
};
