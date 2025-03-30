import React from 'react';
import { Link, useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
import useAuth from '../Hooks/useAuth';
import toast, { Toaster } from 'react-hot-toast';

const JobDetails = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const { user } = useAuth()

    const { data: job = {}, isLoading } = useQuery({
        queryKey: ['job', axiosPublic, id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs/${id}`)
            return res.data
        }
    })
    const { data: users = {}, userIsLoading } = useQuery({
        queryKey: ['users', axiosPublic, user?.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/users/${user?.email}`)
            return res.data
        }
    })

    const { role } = users

    const { _id, jobTitle, jobSkills, cover, jobDescription, date } = job

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Toaster></Toaster>
            <Helmet>
                <title>Job Details</title>
            </Helmet>
            <div className='flex gap-3 items-center'>
                <p className='w-3 h-10 bg-green-500'></p>
                <p className='text-3xl max-sm:text-xl font-medium my-2'>{jobTitle}</p>
            </div>
            <p><span className='font-medium'>Requirement :</span> {jobSkills}</p>
            <p className='md:text-lg font-medium my-2'>Description :</p>
            <p>{jobDescription}</p>

            <div>
                {
                    user?
                        <Link to={`/apply/${_id}`}><button className='px-3 py-1 rounded-sm font-medium text-white bg-green-500 my-3'>Apply Now</button></Link> :
                        <button onClick={() => toast.error('Please login', {
                            duration: 1000,
                            position: 'top-center',
                        })} className='px-3 py-1 rounded-sm font-medium text-white bg-green-500 my-3'>Apply Now</button>
                }
            </div>
        </div>
    );
};

export default JobDetails;