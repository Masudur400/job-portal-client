import React from 'react';
import { Outlet } from 'react-router-dom';

const LoginAndRegister = () => {
    return (
        <div className='container mx-auto p-6'>
            <Outlet></Outlet>
        </div>
    );
};

export default LoginAndRegister;