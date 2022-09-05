// Importing Module
// import { addToCart, totalPrice as price, tq } from './shoppingCart';
// addToCart('bread', 5);
// console.log(price, tq);

console.log('Importing Module');

// import * as ShoppingCart from './shoppingCart.js';
// ShoppingCart.addToCart('bread', 5);

// import add, { addToCart, totalPrice as price, tq } from './shoppingCart.js';
// console.log(price);

// Importing default exports
import add, { cart } from './shoppingCart.js';
add('pizza', 2);
add('bread', 5);
add('cheese', 4);

console.log(cart);
// imports and exports have a live connection
