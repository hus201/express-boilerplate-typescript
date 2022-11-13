import logger from 'pino';
import dayjs from 'dayjs'
const log = logger({
    prettifier:true,
    transport:{
        target:'pino-pretty',
        options:{
            translateTime:true,
            ignore:'pid,hostname',
        }
    },
  

})
export default log;