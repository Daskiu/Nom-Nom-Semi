import searchcard from "./searchcard.css"
export enum AttributeSearch {
    "img" = "img",
    "search" = "search",
}

export default class Searchcard extends HTMLElement{
img?: string;
search?: string;

static get observedAttributes(){
    const attrs: Record<AttributeSearch, null> ={
        img: null,
        search: null
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
    propName: AttributeSearch,
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
        <div id="searchbar">
            <input id="search" type="text">
            <img src="${this.search}">
        </div>
        <div id="searched">
            <img src="${this.img}">
        </div>
        `;
    }
}
}

customElements.define("my-search", Searchcard);