import { LitElement, html, css } from 'lit';


export class DcLitWc extends LitElement {
  static get properties() {
    return {
      title: { type: String },
    };
  }

  static get styles() {
    return css`
      :host {
        min-height: 100vh;
        font-size: calc(10px + 2vmin);
        color: #1a2b42;
        margin: 0 auto;
        background-color: var(--dc-lit-wc-background-color);
      }
    `;
  }

  constructor() {
    super();
    this.title = 'My app';
  }

  render() {
    return html`
      <main>
        <a href="/">Home</a>
        <a href="/about">About</a>
    `;
  }
}


customElements.define('dc-lit-wc', DcLitWc);