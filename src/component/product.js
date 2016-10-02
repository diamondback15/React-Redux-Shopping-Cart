import {createElement} from 'react';
import {add} from '../action/cart';
import {connect} from 'react-redux';
import styles from './styles.css';
import {Col, Thumbnail} from 'react-bootstrap';

const Product = ({add, id, title, image}) => (
<Col xs={6} md={4}>
  <Thumbnail className={styles.product} onClick={() => add(id)}>
    <img src={image} alt={title} className={styles.productImage}/>
    <h3>{title}</h3>
  </Thumbnail>
</Col>
);

export default connect(() => ({}), {add})(Product);
