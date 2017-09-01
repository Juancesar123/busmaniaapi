// See http://docs.sequelizejs.com/en/latest/docs/models-definition/
// for more of what you can do here.
const Sequelize = require('sequelize');

module.exports = function (app) {
  const sequelizeClient = app.get('sequelizeClient');
  const datapobus = sequelizeClient.define('datapobus', {
    nama: {
      type: Sequelize.STRING,
      allowNull: false
    },
    alamat: {
      type: Sequelize.STRING,
      allowNull: false
    },
    nomortelpon: {
      type: Sequelize.STRING,
      allowNull: false
    },
    kota: {
      type: Sequelize.STRING,
      allowNull: false
    },
    provinsi: {
      type: Sequelize.STRING,
      allowNull: false
    }
  }, {
    hooks: {
      beforeCount(options) {
        options.raw = true;
      }
    }
  });

  datapobus.associate = function (models) { // eslint-disable-line no-unused-vars
    // Define associations here
    // See http://docs.sequelizejs.com/en/latest/docs/associations/
  };

  return datapobus;
};
