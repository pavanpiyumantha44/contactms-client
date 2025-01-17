import React, { useState } from 'react'
import '../assets/CSS/form.css'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"
import {FaAddressCard, FaAt,FaPhoneFlip,FaRegAddressCard,FaUserPlus} from 'react-icons/fa6'


const AddContact = () => {

  const [values,setValues] = useState({
    name: '',
    email: '',
    phone: '',
    address:''
  })

  const [erros,setErrors] = useState({});
  const [serverErrors,setServerErrors] = useState([]);
  const navigate = useNavigate();
  const handleInput = (e)=>{
    setValues({
      ...values,
      [e.target.name]:e.target.value
    })
  }

  const handleSubmit = (e)=>{
    e.preventDefault();

      axios.post('http://127.0.0.1:8000/contactms/add-contact',values,{
        headers:{
          Authorization:`Berear ${localStorage.getItem('token')}`
        }
      })
      .then(res=>{
        if(res.data.success){
        toast.success("Contact Added successfully!",{
          position:"top-right",
          autoClose:3000
        })
        navigate('/dashboard');
      }
       
      })
      .catch(error=>{
          console.log(error);
      });
  };

  return (
    <>
    <div className='add-form-container'>
      <form className='add-form' onSubmit={handleSubmit}>
      <h2>Create Contact</h2>
        <div className="form-group">
          <FaUserPlus/>
          <input type='text' placeholder='Enter Name' className='form-control' name='name' onChange={handleInput}/>
        </div>
        <div className="form-group">
          <FaAt/>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
        </div>
        <div className="form-group">
          <FaPhoneFlip/>
          <input type='text' placeholder='Enter Phone Number' className='form-control' name='phone' onChange={handleInput}/>
        </div>
        <div className="form-group">
          <FaAddressCard/>
          <input type='text' placeholder='Enter Address' className='form-control' name='address' onChange={handleInput}/>
        </div>

        <button className='form-btn'>Add</button>
      </form>
    </div>
    </>
  )
}

export default AddContact