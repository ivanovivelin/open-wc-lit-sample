import { LitElement, html, css } from 'lit';
import "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-toast/vlocity-dc-toast.js";
import "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-catalog/vlocity-dc-catalog.js";
import "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-child-catalog/vlocity-dc-child-catalog.js";
import "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-offers-list/vlocity-dc-offers-list.js";
import { digitalCommerceSDKInstance } from '@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-utils/vlocity-dc-sdk-utils';
import { DCCustomLabels } from "@vlocity-cme-wc/digitalcommerce-components-src/vlocity-dc-utils/vlocity-dc-custom-labels";

export class Home extends LitElement {
  static get properties() {
    return {
      title: { type: String },
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
    this.catalogCode = "IDX";
    this.language = digitalCommerceSDKInstance().digitalCommerce.language
      ? digitalCommerceSDKInstance().digitalCommerce.language
      : "en_US";
      Home.getLabels(DCCustomLabels, this.language);
  }

  static getLabels(labelList, language) {
    const translationSDK = digitalCommerceSDKInstance().digitalCommerceTranslation;
    const fetchTranslationsInput = translationSDK.createFetchTranslationsInput();
    fetchTranslationsInput.textToTranslate = labelList;
    fetchTranslationsInput.language = language;
    return translationSDK.fetchTranslations(fetchTranslationsInput);
  }

  render() {
    return html`
        <vlocity-dc-catalog
          catalogCode=${this.catalogCode}
        >
        </vlocity-dc-catalog>

        <vlocity-dc-offers-list
          catalogCode=${this.catalogCode}
        >
        </vlocity-dc-offers-list>

    `;
  }
}


customElements.define('dc-lit-home', Home);