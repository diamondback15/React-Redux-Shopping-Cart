import {ADD_ITEM, SET_QUANTITY, CLEAR_ITEMS, DEL_ITEM} from './types';
import {createAction} from 'redux-actions';

export const add = createAction(ADD_ITEM);
export const deleteItem = createAction(DEL_ITEM);
export const setQuantity = createAction(SET_QUANTITY);
export const clear = createAction(CLEAR_ITEMS);
