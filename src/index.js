import { Router } from '@vaadin/router';
import './app/home/home.js';
import './app/details/details.js';
import './app/cart/cart.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  { path: '/',     component: 'dc-lit-home' },
  { path: '/details/:code',     component: 'dc-lit-details' },
  { path: '/shoppingcart/:code/:key',     component: 'dc-lit-cart' }
]);