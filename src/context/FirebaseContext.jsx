import { addDoc, collection, deleteDoc, doc, updateDoc } from "firebase/firestore";
import { createContext,useState } from "react";
import { db } from "../firebase/conexion";

export const dataContext = createContext();

const dataInitial = {
  name: "",
  price: "",
  quantity: "",
}

export const dataprovider = ({children}) =>{
  const [text, setText] = useState(dataInitial);
  const [showForm,setshowForm] = useState(false);
  const [verification,setVerification]=useState('');

  const ChangeComponent = () =>{
    setshowForm(!showForm)
    console.log(showForm)
  }

  const AddProducts = async() =>{
    try {
      await addDoc(collection(db,"products"),text);
      ClearInputs();
    } catch (error) {
      console.log(error)
    }
  }

  const DeleteProducts =async (productId) =>{
    try {
      await deleteDoc(doc(db,"products",productId));
      ClearInputs();
    } catch (error) {
      console.log(error)
    }
  }

  const UppdateProducts  = async () =>{
    try {
      const product = doc(db,"products",verification)
      await updateDoc(product,text);
      ClearInputs();
    } catch (error) {
      console.log(error)
    }
  }

  const FillData = (data) =>{
    setText(data)
    setVerification(data.id)
    ChangeComponent();
    console.log(verification)
  }

  const ClearInputs = () =>{
    setText(dataInitial)
  }

  return (
    <dataContext.Provider value={{verification,FillData,text,DeleteProducts,UppdateProducts,AddProducts,setText,showForm,ChangeComponent}}>
      {children}
    </dataContext.Provider>
  )
}


export default dataprovider;
