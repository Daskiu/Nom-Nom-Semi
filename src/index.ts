import "./components/export";
import "./screens/dashboard/dashboard";
import "./screens/add/add";
import "./screens/login/login";
import "./screens/profile/profile";
import "./screens/register/register";
import "./screens/search/search";
import "./screens/receta/receta"
import { appState, addObserver } from "./store/change";
import { Screens } from "./types/navigation";
class AppContainer extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    addObserver(this);
   
    
  }

  connectedCallback() {

    
    this.render();
  }

  render() {
    if (this.shadowRoot) this.shadowRoot.innerHTML = "";

    switch (appState.screen) {
      case Screens.POST:
        const post = this.ownerDocument.createElement("app-dashboard");
        post.innerText = "My Login";
        this.shadowRoot?.appendChild(post);
        break;
      case Screens.REGISTER:
        const register = this.ownerDocument.createElement("my-register");
        register.innerText = "My Login";
        this.shadowRoot?.appendChild(register);
        break;
      case Screens.LOGIN:
        const login = this.ownerDocument.createElement("my-login");
        login.innerText = "My Login";
        this.shadowRoot?.appendChild(login);
        break;
      case Screens.ADD:
        const add = this.ownerDocument.createElement("my-add");
        add.innerText = "My Login";
        this.shadowRoot?.appendChild(add);
        break;
      case Screens.PROFILE:
        const profile = this.ownerDocument.createElement("my-profile");
        profile.innerText = "My Login";
        this.shadowRoot?.appendChild(profile);
        break;
      case Screens.CARTA:
        const carta = this.ownerDocument.createElement("my-receta");
        carta.innerText = "My Login";
        this.shadowRoot?.appendChild(carta);
        break;
        case Screens.SEARCH:
        const search = this.ownerDocument.createElement("my-search");
        search.innerText = "My Login";
        this.shadowRoot?.appendChild(search);
        break;
    }

  }
}

customElements.define("app-container", AppContainer);
