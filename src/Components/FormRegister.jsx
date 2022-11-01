import Swal from 'sweetalert2'
import { useContext } from "react";
import { dataContext } from '../context/FirebaseContext'

import "../index.css";

const FormRegister = () => {
  
  const {text,setText,UppdateProducts,AddProducts,ChangeComponent,verification} = useContext(dataContext);
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if(text.name==="" || text.price === "" || text.quantity===""){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Error Campos Vacios!!',
       
      })
      return
    }
    if(verification!==""){
      UppdateProducts();
      ChangeComponent();
      return
    }
    AddProducts();
    ChangeComponent();
    Swal.fire(
      'Good job!',
      'Producto Registrado Correctamente!!',
      'success'
    )
  };

  const handleChange = (e) => {
    setText({ ...text, [e.target.name]: e.target.value });
  };

  return (
    <div className="formulario position-fixed">
      <form className="form-control w-50 rounded position-relative" onSubmit={(e) => handleSubmit(e)}>
        <h1 className="mb-3 fs-4 text-center">Register Products!</h1>
        <div className="form-control border-white">
          <label htmlFor="">Name :</label>
          <input
            type="text"
            className="form-control"
            name="name"
            onChange={(e) => handleChange(e)}
            value={text.name}
          />
        </div>
        <div className="form-control border-white">
          <label htmlFor="">Price :</label>
          <input
            type="text"
            className="form-control"
            name="price"
            onChange={(e) => handleChange(e)}
            value={text.price}
          />
        </div>
        <div className="form-control border-white">
          <label htmlFor="">Quantity :</label>
          <input
            type="text"
            className="form-control"
            name="quantity"
            onChange={(e) => handleChange(e)}
            value={text.quantity}
          />
        </div>
        <div className="form-control border-white d-flex justify-content-around">
          <button className="btn btn-primary rounded">Save!</button>
        </div>
      </form>
      <button className="btn btn-danger rounded button" onClick={()=>ChangeComponent()}>X</button>
    </div>
  );
};

export default FormRegister;
