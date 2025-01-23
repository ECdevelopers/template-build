class MyElement extends HTMLElement {
  constructor() {
    super();
    console.log('Element dibuat');
  }

  connectedCallback() {
    console.log('Element ditambahkan ke DOM');
  }

  disconnectedCallback() {
    console.log('Element dihapus dari DOM');
  }

  attributeChangedCallback(name, oldValue, newValue) {
    console.log(`Atribut ${name} berubah dari ${oldValue} ke ${newValue}`);
  }
}
customElements.define('my-element', MyElement);
