import { Sequelize } from 'sequelize';

const sequelize = new Sequelize('tu_base_de_datos', 'tu_usuario', 'tu_contraseña', {
  host: 'localhost',
  dialect: 'mssql',
  port: 1433,
  dialectOptions: {
    options: {
      encrypt: false, // Cambia a true si usas Azure
      trustServerCertificate: true
    }
  },
  logging: false
});

export default sequelize;