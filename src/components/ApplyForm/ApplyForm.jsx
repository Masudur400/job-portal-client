import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';

const ApplyForm = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
            <form>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Name<span className='text-red-500'>*</span></p>
                    <input required type="text" name="name" id="" placeholder='Enter your name' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Email<span className='text-red-500'>*</span></p>
                    <input required type="text" name="email" id="" placeholder='Enter your email' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Phone<span className='text-red-500'>*</span></p>
                    <input required type="text" name="phone" id="" placeholder='Enter your phone number' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Resume Link<span className='text-red-500'>*</span></p>
                    <input required type="text" name="resumeLink" id="" placeholder='Enter your resume link' className='border-2 px-3 md:py-1 w-full' />
                </div>
            </form>
        </div>
    );
};

export default ApplyForm;