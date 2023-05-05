import  {AttributeProfadd} from "../components/export"

export class add extends HTMLElement{
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
export default add;
customElements.define("my-add", add);