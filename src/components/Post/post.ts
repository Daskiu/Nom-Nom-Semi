import post from "./post.css"
import { dispatch } from "../../store/change";
import { navigate } from "../../store/actions";
import { Screens } from "../../types/navigation";
export enum AttributePost{
    "profileimg" = "profileimg",
    "name" = "name",
    "img" = "img",
    "like" = "like",
    "numb" = "numb",
    "comment" = "comment",
    "id_post"="id_post"
}

export default class Post extends HTMLElement{
    profileimg?: string;
    name?: string;
    img?: string;
    like?: string;
    numb?: string;
    comment?: string;
    id_post?: string;

    static get observedAttributes(){
        const attrs: Record <AttributePost, null> ={
            profileimg: null,
            name: null,
            img: null,
            like: null,
            numb: null,
            comment: null,  
            id_post:null,
        }
        return Object.keys(attrs);
    }

    attributeChangedCallback(
        propName: AttributePost,
        _: unknown,
        newValue: string
    ){
        switch(propName){
            default:
                this[propName] = newValue;
                break;
        }
    }

    constructor(){
        super();
        this.attachShadow({mode:"open"});
    }

    connectedCallback(){
        this.render();
    }

    render(){
        if(this.shadowRoot){
            const container = document.createElement('div');
            container.classList.add('container');
            container.addEventListener("click", ()=>recetas(this.id_post));
            // Crear el div con clase "red-div"
            const redDiv = document.createElement('div');
            redDiv.classList.add('red-div');
            
            // Crear el contenedor del título
            const titleContainer = document.createElement('div');
            titleContainer.classList.add('title-container');
            
            // Crear la imagen del perfil
            const profileImg:any = document.createElement('img');
            profileImg.src = this.profileimg;
            profileImg.alt = 'Icono';
            
            // Crear el título
            const title:any = document.createElement('h1');
            title.classList.add('title');
            title.textContent = this.name;
            
            // Agregar la imagen del perfil y el título al contenedor del título
            titleContainer.appendChild(profileImg);
            titleContainer.appendChild(title);
            
            // Crear la imagen principal
            const mainImg:any = document.createElement('img');
            mainImg.src = this.img;
            mainImg.alt = 'Imagen';
            
            // Crear el contenedor del contenido
            const content = document.createElement('div');
            content.classList.add('content');
            
            // Crear el contenedor de los iconos y valores
            const iconValueContainer = document.createElement('div');
            iconValueContainer.classList.add('icon-value');
            
            // Crear la imagen del icono de "like"
            const likeImg:any = document.createElement('img');
            likeImg.src = this.like;
            likeImg.alt = 'Icono 1';
            
            // Crear el span con el número de likes
            const likesSpan = document.createElement('span');
            likesSpan.textContent = '♥ ' + this.numb;
            
            // Crear la imagen del icono de "comment"
            const commentImg:any = document.createElement('img');
            commentImg.src = this.comment;
            commentImg.alt = 'Icono 2';
            
            // Agregar las imágenes y el span al contenedor de iconos y valores
            iconValueContainer.appendChild(likeImg);
            iconValueContainer.appendChild(likesSpan);
            iconValueContainer.appendChild(commentImg);
            
            // Agregar el contenedor del título, la imagen principal, y el contenedor de iconos y valores al div "red-div"
            redDiv.appendChild(titleContainer);
            redDiv.appendChild(mainImg);
            redDiv.appendChild(content);
            content.appendChild(iconValueContainer);
            
            // Agregar el div "red-div" al contenedor principal
            container.appendChild(redDiv);
            this.shadowRoot?.appendChild(container);

            function recetas(id_post:any){
                let ispos:any=id_post;
                
               
                localStorage.setItem('Receta', ispos);
                dispatch(navigate(Screens.CARTA))
            }
        }
        const css = this.ownerDocument.createElement("style");
        css.innerHTML = post;
        this.shadowRoot?.appendChild(css);
    }
}

customElements.define("my-post", Post);