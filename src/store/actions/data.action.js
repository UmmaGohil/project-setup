import * as type from '../types'
import dataURL from '../../data/info.json'

export const viewData = (payload) => {
  return {
    type: type.GET_DATA,
    payload: dataURL,
  }
}

export const loading = (payload) => {
  return {
    type: type.LOADING,
    payload,
  }
}
