// env.js
const env = {
  database: 'examen_umg_9r3i', 
  username: 'libros_examen', 
  password: 'Bo26ynlV1WBBlO8ki7qFeh5cQa3Ulenb', 
  host: 'dpg-cskptgbv2p9s73a9li1g-a', 
  dialect: 'postgres', 
  pool: {
    max: 5, 
    min: 0, 
    acquire: 30000, 
    idle: 10000 
  }
};

module.exports = env;
