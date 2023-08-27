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

  createUser = async (body) => require('./functions/Users/createUser')(this.url, this.headers, body);
  
  createServer = async (query, body) => require('./functions/Servers/createServer')(this.url, this.headers, query, body);

  createFolder = async (query, userApiKey, body) => require('./functions/Files/createFolder')(this.url, this.headers, query, userApiKey, body);

  suspendServer = async (query) => require('./functions/Servers/suspendServer')(this.url, this.headers, query);

  unsuspendServer = async (query) => require('./functions/Servers/unsuspendServer')(this.url, this.headers, query);

  reinstallServer = async (query) => require('./functions/Servers/reinstallServer')(this.url, this.headers, query);

  updateUser = async (query, newData) => require('./functions/Users/updateUser')(this.url, this.headers, query, newData);
  
  updateServer = async (query, newData) => require('./functions/Users/updateServer')(this.url, this.headers, query, newData);

  deleteUser = async (query) => require('./functions/Users/deleteUser')(this.url, this.headers, query);

  deleteUser = async (query) => require('./functions/Servers/deleteServer')(this.url, this.headers, query);

  getUsers = async () => require('./functions/Users/getUsers')(this.url, this.headers);

  getUser = async (query) => require('./functions/Users/getUser')(this.url, this.headers, query);

  getUserServers = async (query) => require('./functions/Users/getUserServers')(this.url, this.headers, query);

  getServers = async () => require('./functions/Servers/getServers')(this.url, this.headers);

  getServer = async (query) => require('./functions/Servers/getServer')(this.url, this.headers, query);

  writeFile = async (query, userApiKey, filePath, fileContent) => require('./functions/Files/writeFile')(this.url, this.headers, query, userApiKey, filePath, fileContent);
};
