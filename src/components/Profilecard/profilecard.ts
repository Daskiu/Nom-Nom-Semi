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

    connectedCallback(){
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
            <div>
                <img src="${this.profileimg}">
                <h1>${this.name}</h1>
                <p>${this.description}</p>
                <img src="${this.ranking}">
                <img src="${this.verified}">
            </div>
            `;
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = profilecard;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-profcard", Profilecard);