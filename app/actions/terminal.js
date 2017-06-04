import {
  LOG_COMMAND,
  ACTIVE_PROCESS,
  COMPLETE_PROCESS,
  defaultLog
} from '../constants'

import { program } from '../os'

export const command = (cmd) => {
  const log = {
    ...defaultLog,
    ...cmd
  }
  return (dispatch) => {
    if(log.delay > 0) dispatch({type: ACTIVE_PROCESS})
    delay(log).then((log)=>{
      dispatch({type: LOG_COMMAND, payload: log})
      program(log, dispatch)
    })
  } 
}

const delay = (log) => {
  return new Promise((res, rej)=>{
    setTimeout(()=>{
      res(log);
    }, log.delay)
  })
}

