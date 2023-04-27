export enum AttributeMenu {
    "home" = "home",
    "search" = "search",
    "add" = "add",
    "profile" = "profile"
}

class Menu extends HTMLElement{
    home?: string;
    search?: string;
    add?: string;
    profile?: string;

    static get observedAttributes(){
        const attrs: Record<AttributeMenu, null> ={
            home: null,
            search: null,
            add: null,
            profile: null,
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
        propName: AttributeMenu,
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
        if (this.shadowRoot){
            this.shadowRoot.innerHTML =`
            <div id="menu">
                <div id="menu2">
                    <img id="home" src="${this.home}">
                    <img id="search" src="${this.search}">
                    </div>
                    <div id="menu3">
                    <img id="add" src="${this.add}">
                    <img id="profile" src="${this.profile}">
                    </div>
                </div>
            `
        }
    }
}

customElements.define("my-menu", Menu);
export default Menu;