import {AttributeInput} from "../components/export"

export class Login extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){
    this.render();
    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <my-menu></my-menu>
            <div class="login">
                <h1>Welcome</h1>
                <my-input placeholder="Coloca tu nombre"></my-input>
                <my-input placeholder="Coloca tu contraseña"></my-input>
                <button class="button">Login</button>
            </div>
            `;
        }
    }
}
export default Login;
customElements.define("my-login", Login);