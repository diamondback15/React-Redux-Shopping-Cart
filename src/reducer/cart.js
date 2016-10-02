import {handleActions} from 'redux-actions';
import {CLEAR_ITEMS, ADD_ITEM, SET_QUANTITY, DEL_ITEM} from 'action/types';
import map from 'lodash/fp/map';

function ifItemIdValid(item) {
  return item.id === this;
}

const ifItemInCart = (items, id) => items.findIndex(ifItemIdValid, id) >= 0
                      ? items : [...items, {id, quantity: 1}];

export default handleActions({
  [CLEAR_ITEMS]: () => ({
    items: [],
  }),
  [ADD_ITEM]: (state, {payload: id}) => ({
    ...state,
    items: ifItemInCart(state.items, id),
  }),
  [DEL_ITEM]: (state, {payload: {id}}) => ({
    ...state,
    items: state.items.filter((item) => item.id !== id),
  }),
  [SET_QUANTITY]: (state, {payload: {id: target, quantity}}) => ({
    ...state,
    items: map(({id, ...rest}) => (
      target === id ? {id, ...rest, quantity} : {id, ...rest}
    ), state.items),
  }),
}, {
  items: [],
});
