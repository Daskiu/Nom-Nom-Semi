import { AttributeInput } from "../../components/export";
import { getShape } from "../../store/actions";
import { addObserver, appState } from "../../store/index";
import login from "./login.css";
import { dispatch } from "../../store/change";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { database, loginUser } from "../../utils/firebase";
import { saveProductInDB } from "../../utils/firebase";

class Login extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
    
   
    this.render();

  }





  render() {
    function changeWindow(){
        dispatch(navigate(Screens.POST))
        console.log("cambio");
        
      }
    if (this.shadowRoot) {
     

      // Crear el elemento div con clase "container"
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("container");

      // Crear la etiqueta h2
      const heading = document.createElement("h2");
      heading.textContent = "Welcome";

      // Crear el elemento div con clase "red-div"
      const redDiv = document.createElement("div");
      redDiv.classList.add("red-div");

      // Crear el formulario
      const form = document.createElement("form");

      // Crear el input de texto
      const inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      inputText.setAttribute("placeholder", "Email");

      // Crear el input de contraseña
      const inputPassword = document.createElement("input");
      inputPassword.setAttribute("type", "password");
      inputPassword.setAttribute("placeholder", "Password");
      const button = document.createElement("button");
      button.textContent = "Iniciar Sesión";
      button.setAttribute("type", "button");
      button.addEventListener("click", send_data);

      const link = document.createElement('a');

      // Establecer el texto y la URL del enlace
      link.textContent = 'Registro';
      link.addEventListener("click", formulario_registro);
      // Agregar los elementos al árbol DOM

      containerDiv.appendChild(redDiv);
      redDiv.appendChild(heading);
      redDiv.appendChild(form);

      form.appendChild(inputText);
      form.appendChild(inputPassword);
      form.appendChild(button);
      form.appendChild(link);

      this.shadowRoot?.appendChild(containerDiv);

      function formulario_registro(){
        dispatch(navigate(Screens.REGISTER))
      }
      async function send_data() {
        console.log("cargando");
      
        
        
        const inputValue = inputText.value;
        const passwordValue = inputPassword.value;
        loginUser(inputValue,passwordValue)
       
        changeWindow();

        console.log();
        
      }
    }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = login;
    this.shadowRoot?.appendChild(css);
  }
}
export default Login;
customElements.define("my-login", Login);
