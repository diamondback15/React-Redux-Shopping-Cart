import {createElement} from 'react';
import Product from './product';
import * as products from '../data/items';
import Heading from './heading';
import FontAwesome from 'react-fontawesome';

export default () => (
  <div>
    <Heading><FontAwesome name='coffee' /> Products</Heading>
    <Product {...products.cake}/>
    <Product {...products.waffle}/>
    <Product {...products.chocolate}/>
  </div>
);
