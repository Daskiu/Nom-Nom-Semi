import {AttributeInput} from "../components/export"

class Profile extends HTMLElement{
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
            <my-profcard></my-profcard>
            `;
        }
    }
}
export default Profile;
customElements.define("my-profile", Profile);