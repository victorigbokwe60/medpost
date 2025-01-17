const path = require("path");
const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();
const router = jsonServer.router(path.join(__dirname, "..", "db.json")); // Correctly specify absolute path

server.use(middlewares);
server.use(router);

module.exports = server;
