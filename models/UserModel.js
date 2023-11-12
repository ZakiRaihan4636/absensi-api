import {
  Sequelize
} from "sequelize";
import db from "../config/database.js";

const {
  DataTypes
} = Sequelize;

const User = db.define('user', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nama: {
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
  role: {
    type: DataTypes.STRING,
  },
  createdAt: {
    type: DataTypes.DATE,
  },
  updatedAt: {
    type: DataTypes.DATE,
  },
});

export default User;

(async () => {
  await db.sync()
})();