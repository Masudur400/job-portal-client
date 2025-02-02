// import axios from 'axios';
// import React, { useState } from 'react';
// import { Link, useNavigate } from 'react-router-dom';
// import useAuth from '../Hooks/useAuth';
// import useAxiosPublic from '../Hooks/useAxiosPublic';



// const imageHostingKey = import.meta.env.VITE_image_hosting_key;
// const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

// const Register = () => {

//     const {createUser, loading} = useAuth()
//     const axiosPublic = useAxiosPublic()
//     const navigate = useNavigate()

//     const [showPassword, setShowPassword] = useState(false);
//     const [emailError, setEmailError] = useState('');
//     const [userSuccess, setUserSuccess] = useState('');
//     const [passwordError, setPasswordError] = useState('');



//     const handleRegister = async (e) => {
//         e.preventDefault()
//         const form = new FormData(e.currentTarget)
//         const name = form.get('name')
//         const email = form.get('email')
//         const password = form.get('password')
//         const role = form.get('role')
//         const photoFile = form.get('photo');
        
//         setUserSuccess('');
//         setPasswordError('');
//         setEmailError('');

//         if (password.length < 6) {
//             setPasswordError('Password should be at least 6 characters or longer')
//             return;
//         } else if (!/[A-Z]/.test(password)) {
//             setPasswordError('password should have minimum one character in upper case')
//             return;
//         }


//         try {
//             const imageData = new FormData();
//             imageData.append('image', photoFile);

//             const imageRes = await axios.post(imageHostingApi, imageData, {
//                 headers: {
//                     'Content-Type': 'multipart/form-data',
//                 },
//             });

//             const imageUrl = imageRes.data.data.url;
//             console.log(email, password, name, role, imageUrl);
//         } catch (error) {
//             console.error('Error uploading the image or submitting the form:', error);
//         }

//     }

//     return (
//         <div className="lg:w-1/3 md:w-1/2 mx-auto   md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4 ">
//             <h3 className="md:text-3xl text-xl font-medium text-center my-2">Please Register</h3>
//             <form onSubmit={handleRegister}>
//                 <div>
//                     <p className='max-sm-text-sm text-medium my-2'>Name*</p>
//                     <input type="text" name="name" id="" placeholder='Enter Your Name' className='border-2 px-3 md:py-1 w-full' />
//                 </div>
//                 <div>
//                     <p className='max-sm-text-sm text-medium my-2'>Email*</p>
//                     <input type="email" name="email" id="" placeholder='Enter Email' className='border-2 px-3 md:py-1 w-full' />
//                 </div>
//                 <div>
//                     <p className='max-sm-text-sm text-medium my-2'>Password*</p>
//                     <input type="password" name="password" id="" placeholder='Enter Password' className='border-2 px-3 md:py-1 w-full' />
//                 </div>
//                 {/* <div>
//                     <p className='max-sm-text-sm text-medium my-2'>Select One*</p>
//                     <select name="role" id="" className='border-2 px-3 md:py-1 w-full'>
//                         <option disabled selected value="">Select One</option>
//                         <option value="employee">Employee</option>
//                         <option value="jobSeeker">Job Seeker</option>
//                     </select>
//                 </div> */}
//                 <div>
//                 <p className="max-sm-text-sm text-medium my-2">Your Photo*</p>
//                 <input type="file" placeholder="" name="photo" id="" className="border-2 px-3 md:py-1 w-full" />
//                 </div>
//                 <input type="submit" value="Register" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
//             </form>
//             <p className='my-3'>Already have an account <Link to='/loginRegister/login' className='font-medium text-red-500'>please login</Link></p>
//         </div>
//     );
// };

// export default Register;

import { useState } from "react";
import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash, FaXmark } from "react-icons/fa6"; 
import { Link, useNavigate } from "react-router-dom"; 
import axios from "axios";
import { updateProfile } from "firebase/auth"; 
import Swal from "sweetalert2";
import useAuth from "../Hooks/useAuth"; 
import useAxiosPublic from "../Hooks/useAxiosPublic";




const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const Register = () => {

    const { createUser, loading } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()

    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [userSuccess, setUserSuccess] = useState('');
    const [passwordError, setPasswordError] = useState('');


    const handleRegister = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const photoFile = form.get('photo');
        // console.table(name, email, password, photoFile)
        const date = new Date()

        setUserSuccess('');
        setPasswordError('');
        setEmailError('');


        if (password.length < 6) {
            setPasswordError('Password should be at least 6 characters or longer')
            return;
        } else if (!/[A-Z]/.test(password)) {
            setPasswordError('password should have minimum one character in upper case')
            return;
        }


        try {
            const imageData = new FormData();
            imageData.append('image', photoFile);

            const imageRes = await axios.post(imageHostingApi, imageData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageUrl = imageRes.data.data.url;
            // console.log(imageUrl)

            createUser(email, password)
                .then(result => {
                    updateProfile(result.user, {
                        displayName: name,
                        photoURL: imageUrl
                    })
                })
                .then(() => {
                    const userInfo = {
                        name: name,
                        email: email,
                        photo: imageUrl,
                        role: 'Guest',
                        userCreateTime: date
                    }
                    axiosPublic.post('/users', userInfo)
                        .then(res => {
                            if (res.data.insertedId) {
                                Swal.fire({
                                    position: "center",
                                    icon: "success",
                                    title: "Login successful",
                                    showConfirmButton: false,
                                    timer: 1000
                                });
                                e.target.reset()
                            }
                            setUserSuccess('user created successfully')
                            navigate(location?.state ? location.state : '/')
                        })
                })
                .catch(error => {
                    console.log(error.message)
                })

        } catch (error) {
            console.error('Error uploading the image or submitting the form:', error);
        }
    } 
     



    return (

        <div className="min-h-screen">
            <Helmet>
                <title>Register</title>
            </Helmet>

            <div className="lg:w-1/3 md:w-1/2 mx-auto md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">

                {/* <div className="flex justify-end">
                    <Link to='/' className="p-1 border-2 border-red-500 rounded-full"><FaXmark className="md:text-3xl text-red-600 my-0"></FaXmark></Link>
                </div> */}

                <h2 className="md:text-3xl text-xl font-medium text-center my-2">Please Register </h2>

                {
                    userSuccess && <p className="  text-green-500">{userSuccess}</p>
                }

                <form onSubmit={handleRegister}>

                    <p className="max-sm-text-sm  my-2">Name*</p>
                    <input className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2" type="text" name="name" placeholder="Name" id="name" required />


                    <p className="max-sm-text-sm  my-2">Email*</p>
                    <input className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4 py-1 mb-2" type="email" name="email" placeholder="Email" id="email" required />
                    {
                        emailError && <p className="  text-red-500">{emailError}</p>
                    }

                    <p className="max-sm-text-sm  my-2">Password*</p>
                    <div className="relative">
                        <input className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" required />
                        <span className="absolute md:top-1/4 top-[5px] right-3" onClick={() => setShowPassword(!showPassword)}>
                            {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                        </span>
                    </div>
                    {
                        passwordError && <p className="text-red-500">  {passwordError}</p>
                    }

                    <p className="max-sm-text-sm  my-2">Your Photo*</p>
                    <input type="file" placeholder="" name="photo" id="" className="border-2 border-base-300 bg-base-100 rounded-sm md:rounded-md w-full text-sm md:text-base  mb-2" />

                    {
                        loading ?
                            <button disabled className="px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600'"><span className="loading loading-spinner loading-md"></span></button>
                            :
                            // <input disabled={loading} className="w-full px-4 py-1 md:py-2 text-center max-sm:text-sm text-lg rounded-md border border-orange-400 text-orange-500 hover:shadow-lg font-bold my-3" type="submit" value="Register" />
                            <input disabled={loading} type="submit" value="Register" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
                    }

                </form>

                <p>Already have an account ? <Link to='/loginRegister/login' className="text-red-500 font-medium">please Login</Link></p>
                 
            </div>
        </div>
    );

};

export default Register;