import React, { useContext, useState } from 'react';
import DatePicker from "react-datepicker";
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { AuthContext } from '../contacts/AuthProvider';
import { FcGoogle } from "react-icons/fc";
import { VscGithub } from "react-icons/vsc";
import { BsTwitterX } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa6";

import "react-datepicker/dist/react-datepicker.css"; // Import DatePicker styles

const SignUp = () => {
    const { createUser, loginWithGoogle } = useContext(AuthContext);
    const [error, setError] = useState("");
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";
    const [startDate, setStartDate] = useState(new Date());
    const [passwordMismatch, setPasswordMismatch] = useState(false);

    const handleSignUp = (e) => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        const dob= form.date.value;
        const name=form.firstName.value;
        const confirm= form.confirm.value;

        if(password != confirm){
            setPasswordMismatch(true);
            return;
        }

        setPasswordMismatch(false);

        createUser(email, password).then((userCredential) => {
            const user = userCredential.user;
            alert("Sign Up successful");
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
            <div className='flex flex-col items-center border  rounded-2xl p-6 shadow-2xl bg-white bg-opacity-30 backdrop-blur-md'>
                <h1 className='text-xl mb-6 font-bold text-black mt-2'>Sign Up</h1>

                <form onSubmit={handleSignUp} className='flex flex-col space-y-3'>
                    <div className='flex flex-row space-x-2'>
                        <label htmlFor="firstName" className='flex-1'>
                            First Name
                            <input type="text" placeholder='First Name' id="firstName" className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm' />
                        </label>
                        <label htmlFor="lastName" className='flex-1'>
                            Last Name
                            <input type="text" placeholder='Last Name' id="lastName" className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm' />
                        </label>
                    </div>

                    <label htmlFor="date" className='flex flex-col'>
                        Date of Birth:
                        <DatePicker
                            selected={startDate}
                            onChange={(date) => setStartDate(date)}
                            className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm'
                            dateFormat="yyyy/MM/dd"
                            placeholderText="Select a date"
                            id="date"
                        />
                    </label>

                    <label htmlFor="email" className='flex flex-col'>
                        Email:
                        <input type="email" placeholder='your@email.com' id="email" className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm' />
                    </label>

                    <label htmlFor="password" className='flex flex-col'>
                        Password:
                        <input type="password" placeholder='Enter Password' id="password" className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm' />
                    </label>

                    <label htmlFor="confirm" className='flex flex-col'>
                        Confirm Password:
                        <input type="password" placeholder='Confirm Password' id="confirm" className='mt-1 w-full rounded border border-gray-300 p-1.5 text-sm' />
                    </label>
                    {passwordMismatch===true && (
                        <p className='text-base text-red-700'>Please enter the same password</p>
                    )}

                    <div className='flex justify-center mt-4 '>
                        <button  type="submit" className='bg-blue-600 hover:bg-red-500 text-white rounded-md px-3 py-1 text-sm w-1/3 mt-4 py-2 '>Sign Up</button>
                    </div>
                    {/* <button type="submit" className='bg-blue-500 text-white  rounded-md px-3 py-1 mt-2 text-sm w-1/3'>Sign Up</button> */}
                </form>

                <p className='text-sm mt-2'>Already have an account? <Link to="/login" className="text-blue-600 underline">Login</Link> Here</p>

                <hr className='my-4 w-full' />
                <p className='text-center mt-2 font-semibold text-lg'>Sign up with</p>
                <div className='flex justify-between items-center mt-2 mb-4 '>
                    <button onClick={handleRegister}><FcGoogle className='text-2xl mt-2 inline mx-2 ' /></button>
                    <button><FaLinkedin className='text-2xl mt-2 inline mx-2' /></button>
                    <button><BsTwitterX className='text-2xl mt-2 inline mx-2' /></button>
                    <button><VscGithub className='text-2xl mt-2 inline mx-2' /></button>
                </div>
            </div>
        </div>
    );
}

export default SignUp;
