import { getShape } from "../../store/actions";
import { dataPost } from "../../mocks/datapost";
import { addObserver, appState, dispatch } from "../../store/index";
import dashboard from "./dashboard.css";
import Post, {AttributePost} from "../../components/Post/post"
import { ShapeActions } from "../../types/store";
import { Posts } from "../../types/data";
import { iconos_propios } from "../../mocks/icons";
import { getproduct,findUserByUID } from "../../utils/firebase";


class Dashboard extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
   
  }
 
  datas:any;
  
  async connectedCallback() {
  
  
 

   const value: any =   await getproduct();
    
    
    this.datas = Object.entries(value);
 
    const jsonString = JSON.stringify(this.datas);

  // Guarda la cadena JSON en el localStorage
  localStorage.setItem("productos", jsonString);

   
    
 
      this.render();
    

  }

  async render(){
 
    
    if(this.shadowRoot){
        this.shadowRoot.innerHTML =``;
        let a=0;
        this.datas.forEach((data: any)=>{

         
          a++;
         
          
          
          data=data[1];
        
        

          const  objStr= JSON.stringify(data);

         
        //
          const card = this.ownerDocument.createElement('my-post')
          card.setAttribute(AttributePost.id_post, objStr)
          card.setAttribute(AttributePost.profileimg, data.users.image)
          card.setAttribute(AttributePost.name, "@"+data.users.last_name+"_"+data.users.name)
          card.setAttribute(AttributePost.like, iconos_propios.like)
          card.setAttribute(AttributePost.numb, data.title)
          card.setAttribute(AttributePost.comment, iconos_propios.comment)
          card.setAttribute(AttributePost.img, data.image)
          this.shadowRoot?.appendChild(card)
              })

    }
    if(this.shadowRoot){
        this.shadowRoot.innerHTML +=`
        <my-menu></my-menu>
       
        `;
    }
    const css = this.ownerDocument.createElement("style");
        css.innerHTML = dashboard;
        this.shadowRoot?.appendChild(css);
}
}
export default Dashboard;
customElements.define("app-dashboard", Dashboard);