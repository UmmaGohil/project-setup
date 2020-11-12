import * as type from '../types'

const initialState = {
  getData: {},
}

export default (state = initialState, action) => {
  switch (action.type) {
    case type.GET_DATA:
      return {
        ...state,
        getData: action.payload,
      }
    default:
      return state
  }
}
