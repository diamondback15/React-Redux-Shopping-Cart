import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import FontAwesome from 'react-fontawesome';
import styles from './styles.css';
import {Col, Row} from 'react-bootstrap';

export default () => (
  <Col xs={6} md={6} className={styles.productsGrid}>
    <Heading><FontAwesome name='coffee' /> Products</Heading>
    <Row>
      <Product {...products.cake}/>
      <Product {...products.waffle}/>
      <Product {...products.chocolate}/>
    </Row>
  </Col>
);
