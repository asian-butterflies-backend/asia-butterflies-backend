import { Sequelize } from "sequelize";
const db_connection = new Sequelize('butterfly_app','root','LARIdavi1950!',{
        host: 'localhost',
        dialect: 'mysql',
        define: {
            timestamps: false //esta parte es un añadido por lo de createAT y updateAt
        }
}) 
export default db_connection;