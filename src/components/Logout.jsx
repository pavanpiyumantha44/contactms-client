import React, { useContext } from 'react'
import { UserContext } from '../App'
import Swal from 'sweetalert2';
import withReactContent from 'sweetalert2-react-content';
import { useNavigate } from 'react-router-dom';

const MySwal = withReactContent(Swal);

const Logout = () => {
  const {setUser} = useContext(UserContext);

  const navigate = useNavigate();

    Swal.fire({
    title: "Are you sure?",
    text: "Do you want to exist?",
    icon: "warning",
    showCancelButton: true,
    confirmButtonColor: "#3085d6",
    cancelButtonColor: "#d33",
    confirmButtonText: "Yes, Logout!"
    }).then((result) => {
    if (result.isConfirmed) {
        localStorage.clear();
        setUser(null)
        navigate('/');
    }
    else{
      navigate('/dashboard');
    }
    });
}

export default Logout