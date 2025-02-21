import { DataTypes } from "sequelize";
import sequelize from "../utils/db";
import Cliente from "./cliente";

const Mascota = sequelize.define("Mascota", {
  id: { type: DataTypes.INTEGER, autoIncrement: true, primaryKey: true },
  nombre: { type: DataTypes.STRING, allowNull: false },
  especie: { type: DataTypes.ENUM("Perro", "Gato", "Ave", "Otro"), allowNull: false },
  edad: { type: DataTypes.INTEGER, allowNull: false },
  cliente_id: { type: DataTypes.INTEGER, allowNull: false },
});

Mascota.belongsTo(Cliente, { foreignKey: "cliente_id" });

export default Mascota;
