import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from './useAxiosPublic';
import useAuth from './useAuth';
import { useQuery } from '@tanstack/react-query';

const useModerator = () => {

    const {user, loading} = useAuth(); 
    const axiosSecure = useAxiosSecure()

    const {data : isModerator, isPending : isModeratorLoading} = useQuery({
        queryKey : [user?.email, "isModerator"],
        enabled : !loading,
        queryFn : async() => {
            const res = await axiosSecure.get(`/users/moderator/${user?.email}`);
             
            return res?.data?.moderator
        }
    }) 



    return [isModerator, isModeratorLoading]
};

export default useModerator;