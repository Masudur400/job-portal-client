import axios from 'axios';
import React from 'react';

const axiosSecure = axios.create({
    baseURL:import.meta.env.VITE_serverUrl
})

const useAxiosSecure = () => {
    return (
        <div>
            
        </div>
    );
};

export default useAxiosSecure;