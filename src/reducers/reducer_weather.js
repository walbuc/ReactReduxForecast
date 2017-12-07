import {FETCH_WEATHER} from '../actions/index'

export default function (state = [], action) {
  //concat creates a new array
  //state.concat([action.payload.data])
  switch(action.type) {
    case FETCH_WEATHER:
      return [action.payload.data, ...state]
  }
  return state

}
