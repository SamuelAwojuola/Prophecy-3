class MyComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `<h1>Hello world</h1>`;
	}
}

customElements.define('my-component', MyComponent);


class CustomTitle extends HTMLElement {
	constructor() {
		super()
		this.attachShadow({
			mode: 'open'
		})
		this.shadowRoot.innerHTML = `
      <style>
        h1 {
          font-size: 7rem;
          color: #000;
          font-family: Helvetica;
          text-align: center;
        }
      </style>
      <h1>My Custom Title!</h1>
    `
	}
}

window.customElements.define('custom-title', CustomTitle);

const template = document.querySelector('template');
const node = document.importNode(template.content, true);
document.body.appendChild(node);
