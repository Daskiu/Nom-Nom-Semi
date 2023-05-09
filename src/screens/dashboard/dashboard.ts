import { getShape } from "../../store/actions";
import { dataPost } from "../../mocks/datapost";
import { addObserver, appState, dispatch } from "../../store/index";
import dashboard from "./dashboard.css";
import Post, {AttributePost} from "../../components/Post/post"
import { ShapeActions } from "../../types/store";
class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
  }

  async connectedCallback() {
    if (appState.shape.length === 0) {
      const action = await getShape();
      dispatch(action);


    } else {
      this.render();
    }

  }

  render(){
    if(this.shadowRoot){
        this.shadowRoot.innerHTML =``;
        dataPost.forEach((data: any)=>{
          const card = this.ownerDocument.createElement('my-post')
          card.setAttribute(AttributePost.profileimg, data.profileimg)
          card.setAttribute(AttributePost.name, data.name)
          card.setAttribute(AttributePost.like, data.like)
          card.setAttribute(AttributePost.numb, data.numb)
          card.setAttribute(AttributePost.comment, data.comment)
          card.setAttribute(AttributePost.img, data.img)
          this.shadowRoot?.appendChild(card)
              })

    }
    if(this.shadowRoot){
        this.shadowRoot.innerHTML +=`
        <my-menu></my-menu>
        <my-post id="post"></my-post>
        `;
    }
    const css = this.ownerDocument.createElement("style");
        css.innerHTML = dashboard;
        this.shadowRoot?.appendChild(css);
}
}
export default Dashboard;
customElements.define("app-dashboard", Dashboard);