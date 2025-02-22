import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import SingleUser from './SingleUser';
import { Helmet } from 'react-helmet';

const ManageUsers = () => {

    const axiosSecure = useAxiosSecure();


    const { data: allUser = [], isLoading, refetch } = useQuery({
        queryKey: ['users', axiosSecure],
        queryFn: async () => {
            const res = await axiosSecure.get('/users');
            return res.data;
        }
    });



    const sortedUsers = allUser?.sort((a, b) => {
        if (a.role === 'Admin' && b.role !== 'Admin') return -1;
        if (a.role !== 'Admin' && b.role === 'Admin') return 1;
        if (a.role === 'Moderator' && b.role !== 'Moderator') return -1;
        if (a.role !== 'Moderator' && b.role === 'Moderator') return 1;
        if (a.role === 'Guest' && b.role !== 'Guest') return 1;
        if (a.role !== 'Guest' && b.role === 'Guest') return -1;
        return 0;
    });

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet>
                <title>All Users</title>
            </Helmet>
            <div className='flex items-center gap-3'>
                <p className='bg-green-500 w-3 h-9'></p>
                <h3 className="text-2xl font-medium">All Users</h3>
            </div>

            <div className="mt-5">
                {
                    sortedUsers?.map((user, idx) => <SingleUser key={user?._id} user={user} idx={idx} refetch={refetch}></SingleUser>)
                }
            </div>
        </div>
    );
};

export default ManageUsers;