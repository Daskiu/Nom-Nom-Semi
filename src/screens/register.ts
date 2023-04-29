import {AttributeInput} from "../components/Input/input"

class Register extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback(){

    }

    render(){
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <div class="register">
                <h1>Register</h1>
                <my-input placeholder="Nombre"></my-input>
                <my-input placeholder="Email"></my-input>
                <my-input placeholder="ETC"></my-input>
            </div>
            `;
        }
    }
}

customElements.define("my-register", Register);