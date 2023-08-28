module.exports = class PteroManager {
  constructor(apiKey, url) {
    this.apiKey = apiKey;
    this.url = url;
    this.headers = {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "Authorization": `Bearer ${this.apiKey}`
    };
  }

  createUser = async (body) => require('./src/functions/Users/createUser')(this.url, this.headers, body);
  
  createServer = async (query, body) => require('./src/functions/Servers/createServer')(this.url, this.headers, query, body);

  createFolder = async (query, userApiKey, body) => require('./src/functions/Files/createFolder')(this.url, this.headers, query, userApiKey, body);

  suspendServer = async (query) => require('./src/functions/Servers/suspendServer')(this.url, this.headers, query);

  unsuspendServer = async (query) => require('./src/functions/Servers/unsuspendServer')(this.url, this.headers, query);

  reinstallServer = async (query) => require('./src/functions/Servers/reinstallServer')(this.url, this.headers, query);

  updateUser = async (query, newData) => require('./src/functions/Users/updateUser')(this.url, this.headers, query, newData);
  
  updateServer = async (query, newData) => require('./src/functions/Users/updateServer')(this.url, this.headers, query, newData);

  deleteUser = async (query) => require('./src/functions/Users/deleteUser')(this.url, this.headers, query);

  deleteUser = async (query) => require('./src/functions/Servers/deleteServer')(this.url, this.headers, query);

  getUsers = async () => require('./src/functions/Users/getUsers')(this.url, this.headers);

  getUser = async (query) => require('./src/functions/Users/getUser')(this.url, this.headers, query);

  getUserServers = async (query) => require('./src/functions/Users/getUserServers')(this.url, this.headers, query);

  getServers = async () => require('./src/functions/Servers/getServers')(this.url, this.headers);

  getServer = async (query) => require('./src/functions/Servers/getServer')(this.url, this.headers, query);

  writeFile = async (query, userApiKey, filePath, fileContent) => require('./src/functions/Files/writeFile')(this.url, this.headers, query, userApiKey, filePath, fileContent);
};
