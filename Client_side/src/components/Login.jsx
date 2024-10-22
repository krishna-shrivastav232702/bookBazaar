import React, { useContext, useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

const Login = () => {
    const { login, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const handleLogin = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        login(email, password).then((userCredential) => {
            alert("Login successful");
            navigate(from, { replace: true });
        })
        .catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

    const handleRegister = () => {
        loginWithGoogle().then((result) => {
            const user = result.user;
            alert("Sign Up successful");
            navigate(from, { replace: true });
        }).catch((error) => {
            const errorMessage = error.message;
            setError(errorMessage);
        });
    };

    return (
        <div className='flex h-screen items-center justify-center bg-gradient-to-r from-white to-blue-400'>
            <div className='flex flex-col items-center border rounded-2xl p-8 shadow-2xl bg-white bg-opacity-30 backdrop-blur-md'>
                <h1 className='text-2xl mb-4 font-bold text-black'>Login</h1>

                <form onSubmit={handleLogin} className='flex flex-col space-y-4'>
                    <input 
                        type="email" 
                        placeholder='your@email.com' 
                        id="email" 
                        className='w-full rounded border border-gray-300 p-2 text-sm' 
                    />
                    <input 
                        type="password" 
                        placeholder='Enter Password' 
                        id="password" 
                        className='w-full rounded border border-gray-300 p-2 text-sm' 
                    />

                    <div className='flex justify-center mt-4'>
                        <button 
                            type="submit" 
                            className='bg-blue-600 hover:bg-red-500 text-white rounded-md px-4 py-2 text-sm w-1/2'
                        >
                            Login
                        </button>
                    </div>

                    {error && <p className='text-red-700'>{error}</p>}
                    <p className='text-sm mt-2'>
                        Don't have an account? <Link to="/signup" className="text-blue-600 underline">Sign Up</Link> Here
                    </p>
                </form>

                <hr className='my-4 w-full' />
                <p className='text-center mt-2 font-semibold text-lg'>Login with</p>
                <div className='flex justify-between items-center mt-2 mb-4'>
                    <button onClick={handleRegister}><FcGoogle className='text-2xl inline mx-2' /></button>
                    <button><FaLinkedin className='text-2xl inline mx-2' /></button>
                    <button><BsTwitterX className='text-2xl inline mx-2' /></button>
                    <button><VscGithub className='text-2xl inline mx-2' /></button>
                </div>
            </div>
        </div>
    );
}

export default Login;
