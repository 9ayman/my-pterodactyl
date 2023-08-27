module.exports = async function getUsers(url, headers) {
    try {
      const response = await fetch(`${url}/api/application/users`, {
        method: "GET",
        headers
      });
      return JSON.parse(await response.text());
    } catch (err) {
      console.log(err);
    }
  };