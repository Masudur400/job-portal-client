import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import useAuth from '../Hooks/useAuth';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import { MdOutlineCall, MdOutlineEmail } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { CgFacebook } from "react-icons/cg";
import { BsInstagram, BsLinkedin, BsTwitter } from "react-icons/bs";


const ContactUs = () => {

    const form = useRef();
    const { user } = useAuth()
    const [feedbackMessage, setFeedbackMessage] = useState("");
    const [errorMessage, setErrorMessage] = useState('')
    const [successMessage, setSuccessMessage] = useState('')
    const [isLoading, setIsLoading] = useState(false);

    const sendEmail = (e) => {
        e.preventDefault();
        setIsLoading(true);

        emailjs
            .sendForm(
                import.meta.env.VITE_SERVICE_ID,
                import.meta.env.VITE_TEMPLATE_ID,
                form.current,
                import.meta.env.VITE_PUBLIC_KEY
            )
            .then(
                () => {
                    setSuccessMessage("Your message was Emailed successfully!");
                    setIsLoading(false);
                    form.current.reset();
                },
                (error) => {
                    setErrorMessage(
                        "There was an error sending your message. Please try again."
                    );
                    setIsLoading(false);
                    console.error("Failed to send message:", error);
                }
            );
    };

    return (
        <div>
            <Helmet>
                <title>Contact</title>
            </Helmet>
            <Toaster></Toaster>

            <div className='mt-10 md:flex gap-10 justify-center space-y-5 md:space-y-0 5'>
                {/* contact form  */}
                <div className='border border-base-300 py-5 px-4 rounded-md shadow-md '>
                    <div className="w-full flex flex-col items-center justify-center">
                        <h1 className="text-4xl font-bold">Contact Us</h1>
                        <p className="text-[1rem] font-medium opacity-75 my-3">Write Your FeedBack and Problem</p>
                        {/* {
                            successMessage && <p className='text-green-500'>{successMessage}</p>
                        }
                        {
                            errorMessage && <p className='text-red-500'>{errorMessage}</p>
                        } */}
                    </div>

                    <div className='md:flex gap-6 mt-5'>

                        <div className="flex flex-col gap-[20px]  ">
                            <p className="flex items-center gap-[8px]">
                                <MdOutlineCall />
                                +8801327286000
                            </p>
                            <p className="flex items-center break-all gap-[8px]">
                                <MdOutlineEmail />
                                dev.mdmasudur@gmail.com
                            </p>
                            <p className="flex items-center gap-[8px]">
                                <IoLocationOutline />
                                Dhanmondi-15, Dhaka, Bangladesh
                            </p>

                            <div className="flex gap-[15px] flex-wrap text-black mt-8 md:mt-16">
                                <a className="text-[1.3rem] p-1.5 cursor-pointer rounded-full bg-sky-500 text-white hover:bg-white hover:text-sky-500 transition-all duration-300  boxShadow">
                                    <CgFacebook />
                                </a>
                                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-sky-500 text-white hover:bg-white hover:text-sky-500 transition-all duration-300 boxShadow">
                                    <BsTwitter />
                                </a>
                                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full bg-pink-500 text-white hover:bg-white hover:text-pink-500 transition-all duration-300  boxShadow">
                                    <BsInstagram />
                                </a>
                                <a className="text-[1.2rem] p-1.5 cursor-pointer rounded-full  bg-sky-500 text-white hover:bg-white hover:text-sky-500 transition-all duration-300 boxShadow">
                                    <BsLinkedin />
                                </a>
                            </div>
                        </div>
                        <form ref={form} onSubmit={sendEmail} className="mt-[50px space-y-3   flex-1 lg:w-96 md:w-72">
                            <input placeholder='Name' type="text" name='from_name' className='px-4 py-2 w-full rounded-md border border-base-300' />

                            <input placeholder='Email' type="email" name="user_email" id="" className='px-4 py-2 w-full rounded-md border border-base-300' />

                            <textarea name="message" id="" rows={4} className='w-full border border-base-300'></textarea>

                            {
                                user ?
                                    <button type="submit" className={`px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600`}>Send Mail</button> :
                                    <button onClick={() => toast.error('Please Login', {
                                        duration: 1000,
                                        position: 'top-center',
                                    })} className={`px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600`}>Send Mail</button>
                            }
                        </form>
                    </div>
                </div> 
            </div>
        </div>
    );
};

export default ContactUs;