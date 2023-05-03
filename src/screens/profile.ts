import { AttributeProf } from "../components/Profilecard/profilecard";

class Profile extends HTMLElement{
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
            <my-profcard></my-profcard>
            `;
        }
    }
}

customElements.define("my-profile", Profile);