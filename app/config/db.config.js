// db.config.js
const env = require('./env.js');
const Sequelize = require('sequelize');

// Configuración de Sequelize con SSL habilitado
const sequelize = new Sequelize(env.database, env.username, env.password, {
  host: env.host,
  dialect: env.dialect,
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false
    }
  },
  pool: {
    max: env.pool.max,
    min: env.pool.min,
    acquire: env.pool.acquire,
    idle: env.pool.idle,
  }
});

// Verificar conexión
sequelize.authenticate()
  .then(() => {
    console.log('Conexión a la base de datos establecida exitosamente.');
  })
  .catch((error) => {
    console.error('No se pudo conectar a la base de datos:', error);
  });

const db = {};
db.Sequelize = Sequelize;
db.sequelize = sequelize;
db.Proyecto = require('../models/tareaM.js')(sequelize, Sequelize);

module.exports = db;