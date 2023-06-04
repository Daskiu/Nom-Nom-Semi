import { initializeApp } from "firebase/app"
import { getFirestore, collection, addDoc, getDocs, query, orderBy,where } from "firebase/firestore";
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import {getAuth, signInWithEmailAndPassword,setPersistence, browserSessionPersistence,createUserWithEmailAndPassword } from "firebase/auth";
import { Posts } from "../types/data";
import { dispatch } from "../store/change";
import { navigate } from "../store/actions";
import { Screens } from "../types/navigation";

const firebaseConfig = {
  apiKey: "AIzaSyCVzUUlvabAnBHZl1uOFBSRXjLb5L4Ql8g",
  authDomain: "nomnom2-b711e.firebaseapp.com",
  projectId: "nomnom2-b711e",
  storageBucket: "nomnom2-b711e.appspot.com",
  messagingSenderId: "674242458514",
  appId: "1:674242458514:web:bda0c2606188500c84c74b"
};
const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
const db = getFirestore(firebaseApp);
const storage = getStorage(firebaseApp);
export const database = db


export const saveProductInDB = async (informacion:any) => {
  const comidasCollection = collection(db, 'products');
  const formData=informacion;
  const image=informacion.image;

  const storageRef = ref(storage, 'images/' + image.name);
  const uploadTask = uploadBytes(storageRef, image);
  uploadTask.then((snapshot:any) => {
    getDownloadURL(snapshot.ref).then((imageUrl:any) => {
      formData.image = imageUrl;

      // Agregar el objeto a la colección "comidas" en Cloud Firestore
      addDoc(comidasCollection, formData)
        .then((docRef) => {
          console.log('Formulario enviado con éxito. Documento ID:', docRef.id);
          dispatch(navigate(Screens.POST))
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
        });
    });
  })


};

export const getproduct = async()=>{
  const comidasCollection = collection(db, 'products');
  try {
    // Obtener todos los documentos de la colección "comidas"
    const querySnapshot = await getDocs(comidasCollection);

    // Limpiar la tabla antes de mostrar los nuevos datos
    const values:any=[];
  
    await Promise.all(querySnapshot.docs.map(async (doc) => {
      const id_product=doc.id;
      const data = doc.data();
      const user = await findUserByUID(data.user);
      data.users = user;
      data.id_product=id_product;
      values.push(data);
    }));

    return values;
    // Recorrer los documentos y crear una fila en la tabla para cada uno
 
  } catch (error) {
    console.error('Error al obtener los datos:', error);
  }
}


export const saveRegister = async (informacion:any) => {



  const comidasCollection = collection(db, 'user');
  const formData=informacion;
  const image=informacion.image;

  const storageRef = ref(storage, 'profile/' + image.name);
  const uploadTask = uploadBytes(storageRef, image);
  uploadTask.then((snapshot:any) => {
    getDownloadURL(snapshot.ref).then((imageUrl:any) => {
      formData.image = imageUrl;

      // Agregar el objeto a la colección "comidas" en Cloud Firestore
      addDoc(comidasCollection, formData)
        .then((docRef) => {
          console.log('Formulario enviado con éxito. Documento ID:', docRef.id);
          
        })
        .catch((error) => {
          console.error('Error al enviar el formulario:', error);
        });
    });
  })

};

export const findUserByUID = async (uid:any) =>  {
  try {

    
    const userCollection = collection(db, 'user');
    // Crear una consulta para buscar un usuario con el UID proporcionado
    const q = query(userCollection, where('uid', '==', uid));
    const querySnapshot = await getDocs(q);

    // Verificar si se encontró algún usuario
    if (querySnapshot.size > 0) {
      // Obtener los datos del primer documento (suponiendo que el UID es único)
      const doc = querySnapshot.docs[0];
      const userData = doc.data();
      
      
      return userData;
    } 
  } catch (error) {
    console.error('Error al buscar el usuario:', error);
  }
}


export const SaveUsercredential=async (emails:any,passwords:any,informacion:any) =>{
  const email = emails;
  const password = passwords;
  
  createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      // El registro de usuario fue exitoso
      const user = userCredential.user;
      informacion.uid=user.uid;

      saveRegister(informacion);
      dispatch(navigate(Screens.LOGIN))
      return true;
    })
    .catch((error) => {
      // Ocurrió un error durante el registro de usuario
      const errorCode = error.code;
      const errorMessage = error.message;
      alert("Ocurrio un error")
      console.error("Error de registro de usuario:", errorCode, errorMessage);
      return false;
    });

}

export const loginUser=async (emails:any,passwords:any) => { 
  signInWithEmailAndPassword(auth, emails, passwords)
  .then((userCredential) => {
    // Inicio de sesión exitoso
    const user = userCredential.user;
    console.log("Usuario logueado:", user);

   
    localStorage.setItem('UUID', user.uid);
  })
  .catch((error) => {
    // Error en el inicio de sesión
    const errorCode = error.code;
    const errorMessage = error.message;
    console.error("Error en el inicio de sesión:", errorCode, errorMessage);
  });
};



export const seashproducto=async (name_producto:any)=>{

  
  const nombre = name_producto;
  console.log(nombre);
  // Verifica si se ingresó un nombre
  if (nombre === "") {
    console.log("vacio");
    return;
  }
  const productos=await getproduct();

 const filtro= similares(nombre,productos)
  console.log(filtro);
  
}

export const similares=(nombre:any,prooductos_array:any)=>{
  const resultados:any=[];
  for (const producto of prooductos_array) {
    if (producto[1].title.toLowerCase().includes(nombre.toLowerCase())) {
      resultados.push(producto);
    }
  }
  return resultados;
}
