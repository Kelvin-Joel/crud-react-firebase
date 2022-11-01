import {getDocs,collection} from 'firebase/firestore'
import { db } from '../firebase/conexion'
import { useEffect,useState } from 'react'
import FormRegister from './FormRegister';
import { dataContext } from '../context/FirebaseContext';
import "../index.css"
import { useContext } from 'react';

const ListProducts = () => {
  const [products,setProducts]=useState([]);
  const {showForm,FillData,ChangeComponent,DeleteProducts} = useContext(dataContext)
  const collectionproducts = collection(db,"products")

  const getProducts = async () =>{
    const dataproducts = await getDocs(collectionproducts)
    setProducts(dataproducts.docs.map((doc)=>({...doc.data(),id:doc.id})))
  }

  useEffect(()=>{
    getProducts();
  },[products])

  return (
    <div className='content'>

     <button className='btn btn-success rounded mb-3' onClick={()=>ChangeComponent()}>New Register</button>
   
      <table className="table table-dark tabla">
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
            <th>Quantity</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {
            products.map(products=>(
              <tr key={products.id}>
                <td>{products.name}</td>
                <td>{products.price}</td>
                <td>{products.quantity}</td>
                <td><button className='btn btn-warning rounded' onClick={()=>FillData(products)}>Edit</button></td>
                <td><button className='btn btn-danger rounded' onClick={()=>DeleteProducts(products.id)}>Delete</button></td>
              </tr>
            ))
          }
        </tbody>
      </table>
      {
        showForm ? <FormRegister/> : ""
      }
    </div>
  )
}

export default ListProducts