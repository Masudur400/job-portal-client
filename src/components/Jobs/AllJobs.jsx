import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import SingleJob from './SingleJob';
import { useQuery } from '@tanstack/react-query';
import { div } from 'framer-motion/client';
import { Helmet } from 'react-helmet';
import Loading from '../Loading/Loading';

const AllJobs = () => {

    const axiosPublic = useAxiosPublic()

    const { data: jobs = [], isLoading } = useQuery({
        queryKey: ['jobs', axiosPublic], 
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs`);
            return res.data;
        }
    });

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet>
                <title>Jobs</title>
            </Helmet>
            <h3 className="text-2xl font-medium mt-5 mb-10 text-center">All Jobs</h3>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6'>
            {
                jobs.map(job => <SingleJob key={job._id} job={job}></SingleJob>)
            }
        </div>
        </div>
    );
};

export default AllJobs;