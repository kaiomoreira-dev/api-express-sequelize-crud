import { Sequelize } from "sequelize";

export const sequelizeConnection = new Sequelize('database_development', 'kaiodev', 'docker123', {
  host: 'localhost',
  dialect: 'postgres',
  logging: false,
});

export async function connectDB(){
    try {
     await sequelizeConnection.authenticate()
     console.log("Banco de dados conectado com sucesso! 🚀");
    } catch (error) {
     console.error("Erro ao conectar com o banco de dados: ", error);
    }
  }