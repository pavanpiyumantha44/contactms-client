import React, { useState } from 'react'
import '../assets/CSS/form.css'
import { Link, useNavigate } from 'react-router-dom'
import Navbar from '../components/Navbar'
import Validation from '../components/Validation'
import axios from 'axios'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css"

const Register = () => {

  const [values,setValues] = useState({
    name: '',
    email: '',
    password: ''
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
    const errs = Validation(values);
    setErrors(errs);

    if(errs.name === "" && errs.email==="" && errs.password === ""){
      axios.post('http://127.0.0.1:8000/contactms/register',values)
      .then(res=>{
        if(res.data.success){
        toast.success("Account created successfully!",{
          position:"top-right",
          autoClose:5000
        })
        navigate('/login');
      }
       
      })
      .catch(error=>{
        if(error.response.data.errors){
          setServerErrors(error.response.data.errors);
        }
        else{
          console.log(error);
        }
      })
    }

  }

  return (
    <>
    <Navbar/>
    <div className='form-container'>
      <form className='form' onSubmit={handleSubmit}>
      <h2>Register</h2>
        <div className="form-group">
          <label htmlFor='name' className='form-label'>Name</label>
          <input type='text' placeholder='Enter Name' className='form-control' name='name' onChange={handleInput}/>
          {
            erros.name && <span className='error'>{erros.name}</span>
          }
        </div>
        <div className="form-group">
          <label htmlFor='email' className='form-label'>Email</label>
          <input type='email' placeholder='Enter Email' className='form-control' name='email' autoComplete='off' onChange={handleInput}/>
          {
            erros.email && <span className='error'>{erros.email}</span>
          }
        </div>
        <div className="form-group">
          <label htmlFor='password' className='form-label'>Password</label>
          <input type='password' placeholder='Enter Password' className='form-control' name='password' onChange={handleInput}/>
          {
            erros.password && <span className='error'>{erros.password}</span>
          }
        </div>
        {
          serverErrors.length>0 &&(
            serverErrors.map((error,index)=>{
              <p className='error' key={index}>{error.msg}</p>
            })
          )
        }
        <button className='form-btn'>Register</button>
        <p>Already Registerd? <Link to="/login">Login</Link></p>
      </form>
    </div>
    </>
  )
}

export default Register