import {AttributeInput} from "../../components/export"
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import register from "./register.css";
import { SaveUsercredential ,saveRegister} from "../../utils/firebase";

class Register extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }
    enviardatos_firebase(){

    }
    async connectedCallback() {

        
        
          this.render();
        
      }

      render(){
        const myFunction = () => {
            console.log("hola");
            
          };
      
        if(this.shadowRoot){
            this.shadowRoot.innerHTML =`
            `;
        }
        if(this.shadowRoot){
            
            const container = document.createElement("div");
            container.classList.add("container");
            
            const redDiv = document.createElement("div");
            redDiv.classList.add("red-div");
            
            const heading = document.createElement("h2");
            heading.textContent = "Register";
            
            const form = document.createElement("form");
            
            const inputRow = document.createElement("div");
            inputRow.classList.add("input-row");
            
            const nameInput = document.createElement("input");
            nameInput.type = "text";
            nameInput.placeholder = "Name";
            
            const lastNameInput = document.createElement("input");
            lastNameInput.type = "text";
            lastNameInput.placeholder = "Last Name";
            
            inputRow.appendChild(nameInput);
            inputRow.appendChild(lastNameInput);
            
            const emailInputContainer = document.createElement("div");
            emailInputContainer.classList.add("input-container");
            
            const emailInput = document.createElement("input");
            emailInput.type = "text";
            emailInput.placeholder = "Email";
            
            emailInputContainer.appendChild(emailInput);
            
            const passwordInputContainer = document.createElement("div");
            passwordInputContainer.classList.add("input-container");
            
            const passwordInput = document.createElement("input");
            passwordInput.type = "password";
            passwordInput.placeholder = "Password";
            
            const confirmPasswordInput = document.createElement("input");
            confirmPasswordInput.type = "password";
            confirmPasswordInput.placeholder = "Confirm Password";
            
            passwordInputContainer.appendChild(passwordInput);
            passwordInputContainer.appendChild(confirmPasswordInput);
            
            const button = document.createElement("button");
            button.type = "button";
            button.id = "formulario";
            button.textContent = "Enviar";
            button.addEventListener("click", send_data);

            const url:any = document.createElement("input");
            url.setAttribute("type", "file");
            url.setAttribute("placeholder", "Image");

            form.appendChild(inputRow);
            form.appendChild(emailInputContainer);
            form.appendChild(passwordInputContainer);
            form.appendChild(url);
            form.appendChild(button);
            
            redDiv.appendChild(heading);
            redDiv.appendChild(form);
            
            container.appendChild(redDiv);


            function send_data(){
              const email = emailInput.value;
              const passwordValue = passwordInput.value;
              console.log(email+" "+passwordValue);
              const info={
                name:nameInput.value,
                last_name:lastNameInput.value,
                email:emailInput.value,
                password:passwordInput.value,
                respaswword:confirmPasswordInput.value,
                image:url.files[0],
              }
              SaveUsercredential(email,passwordValue,info);
              //saveRegister();
            }

            this.shadowRoot?.appendChild(container);
       
        }

        if(this.shadowRoot){
            
            
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = register;
        this.shadowRoot?.appendChild(css);
    }
}
export default Register;
customElements.define("my-register", Register);