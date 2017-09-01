// Initializes the `datapobus` service on path `/datapobus`
const createService = require('feathers-sequelize');
const createModel = require('../../models/datapobus.model');
const hooks = require('./datapobus.hooks');
const filters = require('./datapobus.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'datapobus',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/datapobus', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('datapobus');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
