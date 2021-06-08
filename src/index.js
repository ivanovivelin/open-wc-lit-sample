import { Router } from '@vaadin/router';
import './app.js';
import './app/home/home.js';

const outlet = document.getElementById('outlet');
const router = new Router(outlet);

router.setRoutes([
  { path: '/',     component: 'dc-lit-home' },
  { path: '/about',     component: 'dc-lit-home' }
]);

window.addEventListener('popstate', (event) => {
	// Log the state data to the console
	console.log(event.state);
});