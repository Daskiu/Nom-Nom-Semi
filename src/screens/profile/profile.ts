import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";

class Profile extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    async connectedCallback() {
     
       
          this.render();
        
      }

      render(){
        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            `;
        }
        if(this.shadowRoot){
            this.shadowRoot.innerHTML +=`
            <my-menu></my-menu>
            <my-profcard></my-profcard>
            `;
        }
    }
}
export default Profile;
customElements.define("my-profile", Profile);