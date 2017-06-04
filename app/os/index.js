import { store } from '../index'
import {
  LOG_COMMAND,
  ACTIVE_PROCESS,
  COMPLETE_PROCESS,
  defaultLog
} from '../constants'
import echo from './programs/echo'
import help from './programs/help'

const programMap = {
  echo: echo,
  help: help
}

export const program = (cmd) => {
  const expression = cmd.msg.split(' ')
  const target = expression[0]
  const args = expression.splice(1, expression.length - 1)
  const dispatchInterface = terminalInterface(store.dispatch)
  const exe = programMap[target]

  if(exe) {
    exe(dispatchInterface, ...args)
  } else if(target !== '') {
    dispatchInterface.error('Command not found')
  }
}

export const terminalInterface = (dispatch) => {
  return {
    log: (cmd) => {
      dispatch({type: LOG_COMMAND, payload: {...defaultLog, ...cmd}})
    },
    error: (cmd) => {
      dispatch({type: LOG_COMMAND, payload: {...defaultLog, msg: cmd, color: 'error'}})
    },
    logArray: (arr) => {
      dispatch({type: ACTIVE_PROCESS})
      let x = 0;
      let limit = arr.length;
      const all = () => {
        setTimeout(()=>{
          dispatch({type: LOG_COMMAND, payload: arr[x]})
          x++
          if(x < limit) {
            all()
          } else {
            dispatch({type: COMPLETE_PROCESS})
          }
        }, arr[x].delay)
      }
      all()
    }
  }
}

export const fileSystemInterface = (dispatch) => {
  return {
    createFile: () => {
      return 0
    }
  }
}

