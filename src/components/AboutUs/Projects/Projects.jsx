import React from 'react';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import SingleProject from './SingleProject';
import { useQuery } from '@tanstack/react-query';

const Projects = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/projects`);
            return res.data;
        }
    });

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Projects</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                projects.map (project => <SingleProject project={project} key={project._id}></SingleProject>)
            }
        </div>
        </div>
    );
};

export default Projects;