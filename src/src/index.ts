import "./components/export"
import "./screens/dashboard"
import "./screens/add"
import "./screens/login"
import "./screens/profile"
import "./screens/register"
import "./screens/search"

class AppContainer extends HTMLElement {
    constructor(){
        super();
        this.attachShadow({mode: "open"})
    }

    connectedCallback() {
        this.render()
    }

    render() {
        const something = this.ownerDocument.createElement('my-add');
        this.shadowRoot?.appendChild(something);
    }
}

customElements.define('app-container', AppContainer)