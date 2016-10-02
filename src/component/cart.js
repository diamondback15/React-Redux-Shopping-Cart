import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';

import {clear, setQuantity, deleteItem} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import FontAwesome from 'react-fontawesome';

const Price = (price) => `$ ${(Math.round(price * 100) / 100).toFixed(2)}`;

const Item = connect(
  () => ({}),
  {setQuantity, deleteItem}
)(({id, quantity, setQuantity, deleteItem}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
  const del = () => deleteItem({id});
  return (
    <tr>
      <td>
        {title}
        <FontAwesome onClick={del} name='trash' />
      </td>
      <td>
        {Price(price)}
      </td>
      <td>
        {quantity}
        <FontAwesome onClick={inc} name='plus' />
        <FontAwesome onClick={dec} name='minus' />
      </td>
      <td>
        {Price(price * quantity)}
      </td>
    </tr>
  );
});

const Cart = ({total, items}) => (
  <div>
    <Heading><FontAwesome name='shopping-cart' /> Cart</Heading>
    <a onClick={clear}>Clear all items</a>
    <table>
      <thead>
        <tr>
          <th>Product</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Total</th>
        </tr>
      </thead>
      <tbody>
        {map((item) => <Item {...item}/>, items)}
        <tr><td colSpan={3}/><td>TOTAL: {Price(total)}</td></tr>
      </tbody>
    </table>
  </div>
);

export default connect((state) => {
  return {
    items: state.cart.items,
    total: reduce(
      (sum, {id, quantity}) => sum + products[id].price * quantity,
      0,
      state.cart.items
    ),
  };
})(Cart);
