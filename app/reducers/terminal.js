
import initialState from './initialState';
import {
  LOG_COMMAND,
  ACTIVE_PROCESS,
  COMPLETE_PROCESS
} from '../constants'

export default (state = initialState.terminal, action = {}) => {
  switch(action.type){
    case LOG_COMMAND:
      return {
        ...state,
        logs: [
          ...state.logs,
          action.payload 
        ],
      }
    case ACTIVE_PROCESS:
      console.log('anyone listening?')
      return {
        ...state,
        processing: true
      }
    case COMPLETE_PROCESS:
      return {
        ...state,
        processing: false
      }
    default:
     return state
  }
} 
