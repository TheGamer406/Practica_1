import { Sequelize } from "sequelize";

const sequelize = new Sequelize("veterinariaPatitas", "veteUserAppBD", "admin1234", {
  host: "localhost",
  dialect: "mssql",
  dialectModule: require("tedious"),
  logging: false,
});

export default sequelize;
