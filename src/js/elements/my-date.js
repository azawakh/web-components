class MyDateElement extends HTMLElement {
  constructor() {
    super();
    this.now = new Date();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template();
  }

  connectedCallback() {
    console.log('my-date element is connected');
  }

  template() {
    return `
      <p>現在日時は <time datetime="${this.now.toISOString()}">${this.now.toLocaleString()}</time> です。</p>
    `;
  }
}

customElements.define('my-date', MyDateElement);
