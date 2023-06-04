import Login from "../../screens/login/login";
import { findUserByUID } from "../../utils/firebase";
import profilecard from "./profilecard.css"

export enum AttributeProf {
    "name" = "name",
    "description" = "description",
    "profileimg" = "profileimg",
    "ranking" = "ranking",
    "verified" = "verified",
}

export default class Profilecard extends HTMLElement{
    name?: string;
    description?: string;
    profileimg?: string;
    ranking?: string;
    verified?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeProf, null> ={
            name: null,
            description: null,
            profileimg: null,
            ranking: null,
            verified: null,
        };
        return Object.keys(attrs);
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    user:any
    async connectedCallback(){
         this.user= await findUserByUID(localStorage.getItem("UUID"));
      
        
        this.render();
    }

    attributeChangedCallback(
        propName: AttributeProf,
        _: string | undefined,
        newValue: string | undefined
    ){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
        this.render();
    }

    render(){

      
       
        
        if(this.shadowRoot){
            this.shadowRoot.innerHTML=`
            <my-menu></my-menu>
            <div class="container">
            <div class="red-div">
           
             
            <div class="profile-card">
            <img src="${this.user.image}" alt="Foto de perfil" class="profile-picture">
            <h2 class="profile-name">${this.user.name} ${this.user.last_name}</h2>
            <p class="profile-description">${this.user.email}</p>
            <div class="star-rating">
              <img src="../../../Images/like.png" alt="Estrella dorada" class="star">
              <img src="../../../Images/like2.png" alt="Estrella dorada" class="star">
              <img src="../../../Images/like2.png" alt="Estrella dorada" class="star">
            </div>
          </div>
             
            </div>
          </div>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = profilecard;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-profcard", Profilecard);