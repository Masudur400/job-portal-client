import React from 'react';
import { useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';

const ApplyForm = () => {

    const { id } = useParams()
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: job = {}, isLoading } = useQuery({
        queryKey: ['job', axiosPublic, id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs/${id}`)
            return res.data
        }
    })

    const { _id, jobTitle, jobSkills, cover, jobDescription, date } = job


    const handleApply = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const phone = form.get('phone')
        const resumeLink = form.get('resumeLink')
        const userEmail = user?.email
        const date = new Date()

        const data = {
            jobTitle,
            jobSkills,
            name,
            email,
            phone,
            resumeLink,
            userEmail,
            appliedDate: date,
            jobDescription
        }

        axiosSecure.post('/applies', data)
            .then(res =>{
                if(res.data.insertedId){
                    toast.success('applied successfully!', {
                        duration: 1000,
                        position: 'top-center',
                    })
                    e.target.reset()
                }
            })

    }

    if(isLoading){
        return <Loading></Loading>
    }


    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
            <Toaster></Toaster>
            <form onSubmit={handleApply}>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Name<span className='text-red-500'>*</span></p>
                    <input required type="text" name="name" id="" placeholder='Enter your name' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Email<span className='text-red-500'>*</span></p>
                    <input required type="text" defaultValue={user?.email} name="email" id="" placeholder='Enter your email' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Phone<span className='text-red-500'>*</span></p>
                    <input required type="text" name="phone" id="" placeholder='Enter your phone number' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Resume Link<span className='text-red-500'>*</span></p>
                    <input required type="text" name="resumeLink" id="" placeholder='Enter your resume link' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <input type="submit" value="Submit" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
            </form>
        </div>
    );
};

export default ApplyForm;