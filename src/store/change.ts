import { Screens } from "../types/navigation";
import { Observer } from "../types/store";
import { reducer } from "./reducer";



const emptyState = {
    screen: Screens.LOGIN
  };
  
  export let appState = emptyState;
  

let observers: Observer[] = [];

const notifyObservers = () => observers.forEach((o) => o.render());

export const dispatch = (action: any) => {
 let acciones=action.payload
  
  const clone = JSON.parse(JSON.stringify(appState));
 
  
  const newState = reducer(action, clone);
 
  
  appState = {screen: acciones};
  notifyObservers();
};

export const addObserver = (ref: Observer) => {
  observers = [...observers, ref];
};


