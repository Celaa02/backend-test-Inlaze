import mongoose from 'mongoose'
import { config } from './config'
import logger from './logger'

// connection with database MongoDB
const url = `mongodb://${config.DB_HOST}:${config.DB_PORT}/${config.DB_DATABASE}`

mongoose.connect(url)
  .then(db => logger.info('Db inlaze is Connected'))
  .catch(error => logger.debug(error))
