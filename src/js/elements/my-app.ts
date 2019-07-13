import 'js/elements/my-date';

class MyAppElement extends HTMLElement {
  private connected: 'my-app element is connected' =
    'my-app element is connected';

  private elementText: 'This is a custom element!' =
    'This is a custom element!';

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = this.template();
  }

  connectedCallback() {
    const connectedElement = document.createElement('div');
    connectedElement.setAttribute('id', 'connected');
    connectedElement.innerHTML = this.connected;
    document.body.appendChild(connectedElement);
  }

  template() {
    return `
      <style>
        p {
          color: #f00;
        }
      </style>

      <p>${this.elementText}</p>
      <my-date></my-date>
    `;
  }
}

customElements.define('my-app', MyAppElement);
