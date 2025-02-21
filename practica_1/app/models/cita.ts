import { DataTypes } from 'sequelize';
import sequelize from '@/lib/sequelize'; // Asegura que existe este archivo

const Cita = sequelize.define('Cita', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  nombre: {
    type: DataTypes.STRING,
    allowNull: false
  },
  fecha: {
    type: DataTypes.DATE,
    allowNull: false
  },
  descripcion: {
    type: DataTypes.STRING
  }
}, {
  timestamps: false
});

export default Cita;
