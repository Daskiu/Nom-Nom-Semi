import  {AttributeProfadd} from "../components/export"

class add extends HTMLElement{
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
            <my-addcard></my-addcard>
            `;
        }
    }
}

customElements.define("my-add", add);