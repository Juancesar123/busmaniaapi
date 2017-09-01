const users = require('./users/users.service.js');
const datapobus = require('./datapobus/datapobus.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(datapobus);
};
