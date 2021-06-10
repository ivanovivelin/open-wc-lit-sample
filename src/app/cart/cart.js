import { LitElement, html, css } from 'lit';
import { digitalCommerceSDKInstance } from '@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-utils/vlocity-dc-sdk-utils';
import '@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-shopping-cart/vlocity-dc-shopping-cart.js';
import { Router } from '@vaadin/router';

export class Cart extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      location: { type: Object },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        color: #1a2b42;
        margin: 0 auto;
        background-color: var(--dc-lit-wc-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.digitalCommerceSDK = digitalCommerceSDKInstance().digitalCommerce;
    this.digitalCommerceTranslation =
      digitalCommerceSDKInstance().digitalCommerceTranslation;
    this.location = Router.location;
  }

  connectedCallback() {
    super.connectedCallback();
  }

  static switchRoute(route) {
    Router.go(`/${route}`);
  }

  render() {
    return html`
      ${this.location.params.key !== undefined
        ? html` <vlocity-dc-shopping-cart
            catalogCode="IDX"
            cartContextKey=${this.location.params.key}
          ></vlocity-dc-shopping-cart>`
        : ``}
    `;
  }
}

customElements.define('dc-lit-cart', Cart);
