import {
  Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
  DataTypes
} = Sequelize;

const Dosen = db.define('dosen', {
  id_dosen: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nip: {
    type: DataTypes.STRING,
  },
  nama_dosen: {
    type: DataTypes.STRING,
  },
  email: {
    type: DataTypes.STRING,
  },
  password: {
    type: DataTypes.STRING,
  },
  active: {
    type: DataTypes.BOOLEAN,
  },
  foto: {
    type: DataTypes.STRING,
  },
});

export default Dosen;

(async () => {
  await db.sync()
})();