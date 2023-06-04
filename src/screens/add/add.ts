import Menu, { AttributeMenu } from "../../components/Menu/menu";
import addcard, { AttributeProfadd } from "../../components/addcard/addcard";
import { getShape } from "../../store/actions";
import { addObserver, appState, dispatch } from "../../store/index";
import addc from "./addc.css";
import { saveProductInDB } from "../../utils/firebase";
class add extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {
   

    this.render();
  }

  render() {
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML = `
            `;
    }
    if (this.shadowRoot) {
      this.shadowRoot.innerHTML += `
            <my-menu></my-menu>
            `;

      // Crear el elemento div con clase "container"
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("container");

      // Crear la etiqueta h2
      const heading = document.createElement("h2");
      heading.textContent = "ADD MEAL";

      // Crear el elemento div con clase "red-div"
      const redDiv = document.createElement("div");
      redDiv.classList.add("red-div");

      // Crear el formulario
      const form = document.createElement("form");

      // Crear el input de texto
      const inputText = document.createElement("input");
      inputText.setAttribute("type", "text");
      inputText.setAttribute("placeholder", "Title");

      const selectElement = document.createElement("select");
      selectElement.name = "pets";
      selectElement.classList.add("selects");
      selectElement.id = "pet-select";
      
      // Crear la opción predeterminada
      const defaultOption = document.createElement("option");
      defaultOption.value = "";
      defaultOption.textContent = "--SELECT TYPE MEAL--";
      selectElement.appendChild(defaultOption);
      
      // Crear las opciones adicionales
      const petOptions = ["Breackfast", "Lunch", "Dinner"];
      
      petOptions.forEach((optionValue) => {
        const option = document.createElement("option");
        option.value = optionValue;
        option.textContent = optionValue.charAt(0).toUpperCase() + optionValue.slice(1);
        selectElement.appendChild(option);
      });

      const description = document.createElement('textarea');
      description.placeholder = 'Receta';
      description.rows = 4;
      description.cols = 50;
      description.classList.add("selects");

      const url:any = document.createElement("input");
      url.setAttribute("type", "file");
      url.setAttribute("placeholder", "Image");
     
      
      const button = document.createElement("button");
      button.textContent = "Add Meat";
      button.setAttribute("type", "button");
      button.addEventListener("click", send_data);
      // Agregar los elementos al árbol DOM

      containerDiv.appendChild(redDiv);
      redDiv.appendChild(heading);
      redDiv.appendChild(form);

      form.appendChild(inputText);
      form.appendChild(selectElement);
      form.appendChild(description);
      form.appendChild(url);

      form.appendChild(button);

      this.shadowRoot?.appendChild(containerDiv);

      async function send_data() {
        console.log("cargandpo");
        const datas={
            title:inputText.value,
            type:selectElement.value,
            description:description.value,
            image:url.files[0],
            user:localStorage.getItem("UUID")
        }
      
        
       await saveProductInDB(datas);
        
      }
    }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = addc;
    this.shadowRoot?.appendChild(css);
  }
}
export default add;
customElements.define("my-add", add);
