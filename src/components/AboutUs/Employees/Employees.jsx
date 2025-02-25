import React from 'react';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAxiosPublic from '../../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import SingleEmploye from './SingleEmploye';

const Employees = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: employees = [], isLoading, refetch } = useQuery({
        queryKey: ['employees', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/employees`);
            return res.data;
        }
    });

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div>
            <h2 className="text-3xl font-bold text-center my-10">Employees</h2>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5'>
            {
                employees.map (employ => <SingleEmploye key={employ._id} employ={employ}></SingleEmploye>)
            }
        </div>
        </div>
    );
};

export default Employees;