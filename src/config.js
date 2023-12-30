import * as dotenv from 'dotenv'
dotenv.config()

export const config = {
  //secret
  SECRET_KEY: process.env.SECRET_KEY,
  
  // local server
  HOST_SERVER: process.env.HOST_SERVER,
  PORT_SERVER: process.env.PORT_SERVER,

  // DB SERVER MONGODB
  DB_HOST: process.env.DB_HOST,
  DB_DATABASE: process.env.DB_DATABASE,
  DB_PORT: process.env.DB_PORT,
  DB_USERNAME: process.env.DB_USERNAME,
  DB_PASSAWORD: process.env.DB_PASSAWORD,
}