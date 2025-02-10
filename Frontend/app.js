//#region IMPORTS
import "./Components/titelComponent.js"
import "./Components/ctaComponent.js"
import "./Components/infoComponent.js"
import "./Components/sloganComponent.js"
import "./Components/modulebalkComponent.js"
//#endregion IMPORTS

//#region TEMPLATE
let template = document.createElement('template');
template.innerHTML = /*html*/`
    <titel-ɠ></titel-ɠ>
    <slogan-ɠ></slogan-ɠ>
    <info-ɠ></info-ɠ>
    <modulebalk-ɠ></modulebalk-ɠ>
    <cta-ɠ></cta-ɠ>
    `;
//#endregion TEMPLATE
//#region CLASS
window.customElements.define('main-ɮ', class extends HTMLElement {
    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ 'mode': 'open' });
        this._shadowRoot.appendChild(template.content.cloneNode(true));

    }
    // component attributes
    static get observedAttributes() {
        return [];
    }
    attributeChangedCallback(name, oldValue, newValue) {
    }
    connectedCallback() {
    }
});
//#endregion CLASS