import { getShape } from "../store/actions";
import { addObserver, appState, dispatch } from "../store/index";

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

  render() {
    

  }
}
export default Dashboard;
customElements.define("app-dashboard", Dashboard);