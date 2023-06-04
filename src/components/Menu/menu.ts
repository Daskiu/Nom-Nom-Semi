import { navigate } from "../../store/actions";
import { dispatch } from "../../store/change";
import { Screens } from "../../types/navigation";
import { seashproducto, similares } from "../../utils/firebase";
import menu from "./menu.css";

export enum AttributeMenu {
  "home" = "home",
  "search" = "search",
  "add" = "add",
  "profile" = "profile",
}

export default class Menu extends HTMLElement {
  home?: string;
  search?: string;
  add?: string;
  profile?: string;

  static get observedAttributes() {
    const attrs: Record<AttributeMenu, null> = {
      home: null,
      search: null,
      add: null,
      profile: null,
    };
    return Object.keys(attrs);
  }

  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  connectedCallback() {
    this.render();
  }

  attributeChangedCallback(
    propName: AttributeMenu,
    _: string | undefined,
    newValue: string | undefined
  ) {
    switch (propName) {
      default:
        this[propName] = newValue;
        break;
    }
    this.render();
  }

  changeWindow() {
    dispatch(navigate(Screens.SIGNUP));
  }
  cambio() {
    alert("cambios");
  }

  render() {
    if (this.shadowRoot) {
      const header = document.createElement("header");

      // Crear el elemento <nav>
      const nav = document.createElement("nav");

      // Crear los botones con clase "icon-button"
      const buttons = [];

      // Primer botón
      const button1 = document.createElement("button");
      button1.classList.add("icon-button");
      button1.addEventListener("click",()=>cambio(Screens.POST)); // Agregar el evento onclick
      const img1 = document.createElement("img");
      img1.src = "/Images/Home.png";
      img1.alt = "Icono 1";
      button1.appendChild(img1);
      buttons.push(button1);

      const divseach = document.createElement("div");
      divseach.id = "searchbar";
    


    
      
      const hiddenDiv = document.createElement("div");
      hiddenDiv.className = "div-oculto";
      hiddenDiv.style.width = "100%";
      hiddenDiv.style.backgroundColor = "lightgray";
      hiddenDiv.style.padding = "20px";
      hiddenDiv.style.boxSizing = "border-box";
  
      const hiddenInput = document.createElement("input");
      hiddenInput.className = "ss";
      hiddenInput.style.width = "100%"; // El input ocupa todo el ancho de la página
      hiddenInput.type = "text";
      hiddenInput.setAttribute("placeholder", "Digita nombre de receta");
      hiddenInput.addEventListener("input", () => {
        const texto = hiddenInput.value.trim();
        
        if (texto.length > 3) {
          consultar(texto);
        }else{
          ul.innerHTML="";
        }
      });

      hiddenDiv.appendChild(hiddenInput);
  
      divseach.appendChild(hiddenInput);
      divseach.appendChild(hiddenDiv);



      const ul = document.createElement("ul");

      const button2 = document.createElement("button");
      button2.classList.add("icon-button");
      const img2 = document.createElement("img");
      img2.src = "/Images/Search.png";
      img2.alt = "Icono 2";
      button2.addEventListener("click",()=>aparecer()); // Agregar el evento onclick
      button2.appendChild(img2);
      buttons.push(button2);

      // Tercer botón
      const button3 = document.createElement("button");
      button3.classList.add("icon-button");
      const img3 = document.createElement("img");
      img3.src = "/Images/Save.png";
      img3.alt = "Icono 3";
      button3.addEventListener("click",()=>cambio(Screens.ADD)); // Agregar el evento onclick
      button3.appendChild(img3);
      buttons.push(button3);

      // Cuarto botón
      const button4 = document.createElement("button");
      button4.classList.add("icon-button");
      const img4 = document.createElement("img");
      img4.src = "/Images/profile.png";
      img4.alt = "Icono 4";
      button4.addEventListener("click",()=>cambio(Screens.PROFILE)); // Agregar el evento onclick
      button4.appendChild(img4);
      buttons.push(button4);

      // Agregar los botones al elemento <nav>
      buttons.forEach((button) => {
        nav.appendChild(button);
      });
      const div = document.createElement("div");
      div.className = "div-oculto";
    
      // Agregar el elemento <nav> al elemento <header>
      
      header.appendChild(nav);
      header.appendChild(div);
      div.appendChild(divseach);
      // Función para el evento onclick del primer botón
      function cambio(lugar:any) {
        dispatch(navigate(lugar))
      }
      function aparecer(){
        if (div.style.display === "none") {
          div.style.display = "block";
        
         
        } else {
          div.style.display = "none";
        }
      }

      async function consultar(nombrea:any){
    
            
             const jsonString:any= localStorage.getItem("productos");

             const comidas = JSON.parse(jsonString);
            
             
         const filtro= similares(nombrea,comidas)
         if(filtro.length>=1){
            filtro.forEach((element:any) => {
              const li = document.createElement("li");
                li.textContent = element[1].title;
               li.addEventListener("click", ()=>selectil(element[1]));
                
                ul.appendChild(li);
            });
         }

         function selectil(elemento:any){
          let ispos:any=elemento;
          const jsonString = JSON.stringify(ispos);
          localStorage.setItem('Receta', jsonString);
          dispatch(navigate(Screens.CARTA))
         }
       
      
      divseach.appendChild(ul);
      }
      this.shadowRoot?.appendChild(header);
    }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = menu;
    this.shadowRoot?.appendChild(css);
  }
}

customElements.define("my-menu", Menu);
