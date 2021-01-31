import {
  GET_ITEMS,
  ADD_ITEM,
  DELETE_ITEM
} from '../reducers/itemReducer'
import { createAction } from '@reduxjs/toolkit'

export const getItems = createAction(GET_ITEMS, function prepare(text) {
  return {
    payload: text  
  }
})
