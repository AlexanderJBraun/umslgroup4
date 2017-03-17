import {Product} from '../../../Product';

export interface CartEntity {

  quantity: number; // the number of instances the user wants to buy
  product: Product; // the product related to this cart entry

}
