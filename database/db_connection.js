import "dotenv/config";
import { Sequelize } from "sequelize";

const db_connection = new Sequelize(
  process.env.DB_NAME, // butterfly_app
  process.env.DB_USER, // root
  process.env.DB_PASSWORD ?? "", // "" si está vacío
  {
    host: process.env.DB_HOST || "localhost",
    dialect: process.env.DB_DIALECT || "mysql",
    define: { timestamps: false },
  }
);

export default db_connection;
