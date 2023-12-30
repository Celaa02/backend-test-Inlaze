import app from './app'
import logger from './logger'

import { config } from './config'

app.listen(config.PORT_SERVER, config.HOST_SERVER,()=>{
  logger.info("server is listening on 4000 port");
})