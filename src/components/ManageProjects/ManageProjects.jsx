import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';

const ManageProjects = () => {

    const axiosSecure = useAxiosSecure();


    const { data: allUser = [], isLoading, refetch } = useQuery({
        queryKey: ['projects', axiosSecure],
        queryFn: async () => {
            const res = await axiosSecure.get('/projects');
            return res.data;
        }
    });

    return (
        <div>
            Manage Projects
        </div>
    );
};

export default ManageProjects;