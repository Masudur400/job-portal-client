import React from 'react';
import useAxiosSecure from './useAxiosSecure';
import useAxiosPublic from './useAxiosPublic';

const useModerator = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    return (
        <div>
            use moderator
        </div>
    );
};

export default useModerator;