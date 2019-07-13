class MyDateElement extends HTMLElement {
  private callbackStr = 'my-date element is connected';

  public now: Date;

  constructor() {
    super();
    this.now = new Date();

    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template();
  }

  connectedCallback() {
    const callback = document.createElement('div');
    callback.setAttribute('id', 'callback');
    callback.innerHTML = this.callbackStr;
    document.body.appendChild(callback);
  }

  template() {
    return `
      <p>現在日時は <time datetime="${this.now.toISOString()}">${this.now.toLocaleString()}</time> です。</p>
    `;
  }
}

customElements.define('my-date', MyDateElement);
