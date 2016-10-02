import {createElement} from 'react';
import {connect} from 'react-redux';

import {setQuantity, deleteItem} from '../action/cart';
import * as products from '../data/items';
import styles from './styles.css';
import FontAwesome from 'react-fontawesome';

const roundPrice = (price) => `$ ${(Math.round(price * 100) / 100).toFixed(2)}`;

const Item = ({id, quantity, setQuantity, deleteItem}) => {
  const {title, price} = products[id];
  const inc = () => setQuantity({id, quantity: quantity + 1});
  const dec = () => setQuantity({id, quantity: quantity - 1});
  const del = () => deleteItem({id});
  return (
    <tr className={styles.cartItem}>
      <td>
        {title}
        <FontAwesome onClick={del} className={styles.trash} name='trash' />
      </td>
      <td>
        {roundPrice(price)}
      </td>
      <td>
        {quantity}
        <FontAwesome onClick={inc} name='plus' />
        <FontAwesome onClick={dec} name='minus' />
      </td>
      <td>
        {roundPrice(price * quantity)}
      </td>
    </tr>
  );
};

export default connect(() => ({}), {setQuantity, deleteItem})(Item);
