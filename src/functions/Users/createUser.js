module.exports = async function createUser(url, headers, body) {
  try {
    const response = await fetch(`${url}/api/application/users`, {
      method: "POST",
      headers,
      body: JSON.stringify(body)
    });
    return JSON.parse(await response.text());
  } catch (err) {
    console.log(err);
  }
};
