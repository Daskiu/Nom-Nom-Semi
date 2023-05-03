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
            <my-menu></my-menu>
            <div class="register">
                <h1>Register</h1>
                <my-input placeholder="Name"></my-input>
                <my-input placeholder="Last name"></my-input>
                <my-input placeholder="Email"></my-input>
                <my-input placeholder="Password"></my-input>
                <my-input placeholder="Confirm Password"></my-input>
                <button class="button">Register</button>
            </div>
            `;
        }
    }
}

customElements.define("my-register", Register);