import { LitElement, html, css } from 'lit';
import { digitalCommerceSDKInstance } from '@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-utils/vlocity-dc-sdk-utils';
import "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-offer-config/vlocity-dc-offer-config.js";
import { Router } from '@vaadin/router';

export class Home extends LitElement {
  static get properties() {
    return {
      title: { type: String },
      location: { type: Object }
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

  render() {
    return html`
      <vlocity-dc-offer-config catalogCode="IDX" offerCode=${this.location.params.code}></vlocity-dc-offer-config>
    `;
  }
}

customElements.define('dc-lit-details', Home);
