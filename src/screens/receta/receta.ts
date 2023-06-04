import { AttributeInput } from "../../components/export";
import { getShape } from "../../store/actions";
import { addObserver, appState } from "../../store/index";
import receta from "./receta.css";
import { dispatch } from "../../store/change";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
import { database, loginUser } from "../../utils/firebase";
import { saveProductInDB } from "../../utils/firebase";

class Receta extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
  }

  async connectedCallback() {

    this.render();

  }

  render() {
    function changeWindow() {
      dispatch(navigate(Screens.POST));
     
    }
    if (this.shadowRoot) {
        this.shadowRoot.innerHTML +=`
            <my-menu></my-menu>`;

        const receta:any=localStorage.getItem("Receta")
        const receta_json = JSON.parse(receta);
  
        
      // Crear el elemento div con clase "container"
      const containerDiv = document.createElement("div");
      containerDiv.classList.add("container");

      const heading = document.createElement("h2");
      heading.textContent = "Receta";
      // Crear el elemento div con clase "red-div"
      const redDiv = document.createElement("div");
      redDiv.classList.add("red-div");
      // Crear el contenedor principal
      const container = document.createElement("div");

      // Establecer estilos para el contenedor principal
      container.style.display = "flex";
      container.style.flexDirection = "column";

      // Crear la primera fila
      const firstRow = document.createElement("div");
      firstRow.style.display = "flex";

      // Crear la primera columna de la primera fila
      const firstColumn = document.createElement("div");
      firstColumn.style.flex = "1";

      // Crear la imagen en la primera columna
      const image = document.createElement("img");
      image.src = receta_json.image;
      image.style.width = "100%";
      image.style.height = "auto";

      // Agregar la imagen a la primera columna
      firstColumn.appendChild(image);

      // Crear la segunda columna de la primera fila
      const secondColumn = document.createElement("div");
      secondColumn.style.flex = "1";

      // Crear el texto "Comida" en la segunda columna
      const comidaText = document.createElement("H1");
      comidaText.textContent = receta_json.title;

      // Crear el párrafo "Lorem ipsum dolor sit amet" en la segunda columna
      const paragraph1 = document.createElement("p");
      paragraph1.textContent = receta_json.type;

      // Crear el párrafo "Lorem ipsum dolor sit amet" en la segunda columna
      const paragraph2 = document.createElement("p");
      paragraph2.textContent = receta_json.description;

      // Agregar los elementos de texto a la segunda columna
      secondColumn.appendChild(comidaText);
      secondColumn.appendChild(paragraph1);
      secondColumn.appendChild(paragraph2);

      // Agregar las columnas a la primera fila
      firstRow.appendChild(firstColumn);
      firstRow.appendChild(secondColumn);

      // Crear la segunda fila
      const secondRow = document.createElement("div");
      const finText = document.createElement("p");
      finText.textContent = "Fin";

      // Agregar el texto "Fin" a la segunda fila
      secondRow.appendChild(finText);
        containerDiv.appendChild(redDiv);
        redDiv.appendChild(heading)
        redDiv.appendChild(container)
      // Agregar las filas al contenedor principal
      container.appendChild(firstRow);
      container.appendChild(secondRow);

      this.shadowRoot?.appendChild(containerDiv);

     
    }
    const css = this.ownerDocument.createElement("style");
    css.innerHTML = receta;
    this.shadowRoot?.appendChild(css);
  }
}
export default Receta;
customElements.define("my-receta", Receta);
