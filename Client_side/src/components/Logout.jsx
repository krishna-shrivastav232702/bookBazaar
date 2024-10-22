import React from 'react'
import { AuthContext } from '../contacts/AuthProvider'
import { useContext } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Logout = () => {

    const {logout}= useContext(AuthContext);
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogout=()=>{
        logout().then(() => {
            // Sign-out successful.
            alert("Sign out Successful");
            navigate(from, { replace: true });
          }).catch((error) => {
            // An error happened.
          });
    }
  return (
    <div className='h-screen bg-teal-100 flex items-center justify-center'>
        <button className='bg-red-600 px-8 py-2 text-white rounded  hover:bg-blue-700' onClick={handleLogout}>
            Logout
        </button>
    </div>
  )
}

export default Logout