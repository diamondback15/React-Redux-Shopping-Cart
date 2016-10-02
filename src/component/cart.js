import {createElement} from 'react';
import map from 'lodash/fp/map';
import reduce from 'lodash/fp/reduce';
import {connect} from 'react-redux';

import {clear} from '../action/cart';
import * as products from '../data/items';
import Heading from './heading';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';
import Item from './item';

const roundPrice = (price) => `$ ${(Math.round(price * 100) / 100).toFixed(2)}`;

const Cart = ({total, items, clear}) => (
  <div className={styles.cart}>
    <Heading><FontAwesome name='shopping-cart' /> Cart</Heading>
    {items.length > 0 ?
    <div>
      <button onClick={clear}>Clear all items</button>
      <table>
        <thead className={styles.cartHead}>
          <tr>
            <th>Product</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Total</th>
          </tr>
        </thead>
        <tbody>
          {map((item) => <Item {...item} key={item.id}  />, items)}
          <tr>
            <td colSpan={3} />
            <td colSpan={3} className={styles.totalPrice}>
              {roundPrice(total)}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  : <p>Your cart is empty</p>}
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
}, {clear})(Cart);
