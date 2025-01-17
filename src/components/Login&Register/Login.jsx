import React from 'react';

const Login = () => {
    return (
        <div className="lg:w-1/3 md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4 ">
            <h3 className="text-3xl font-medium text-center my-2">Please Login</h3>
            <form>
                <div>
                    <p className='text-medium my-2'>Email*</p>
                    <input type="email" name="" id="" className='border-2 px-3 py-1 w-full' />
                </div>
                <div>
                    <p className='text-medium my-2'>Password*</p>
                    <input type="password" name="" id="" className='border-2 px-3 py-1 w-full' />
                </div>
            </form>
        </div>
    );
};

export default Login;