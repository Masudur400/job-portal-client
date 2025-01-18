import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {

    const handleRegister = (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const name = form.get('name')
        const email = form.get('email')
        const password = form.get('password')
        const role = form.get('role')
        console.log(email, password, name, role);
    }

    return (
        <div className="lg:w-1/3 md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4 ">
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Please Register</h3>
            <form onSubmit={handleRegister}>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Name*</p>
                    <input type="text" name="name" id="" placeholder='Enter Your Name' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Email*</p>
                    <input type="email" name="email" id="" placeholder='Enter Email' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Password*</p>
                    <input type="password" name="password" id="" placeholder='Enter Password' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Select One*</p>
                    <select name="role" id="" className='border-2 px-3 md:py-1 w-full'>
                        <option disabled selected value="">Select One</option>
                        <option value="employee">Employee</option>
                        <option value="jobSeeker">Job Seeker</option>
                    </select>
                </div>
                <input type="submit" value="Register" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
            </form>
            <p className='my-3'>Already have an account <Link to='/loginRegister/login' className='font-medium text-red-500'>please login</Link></p>
        </div>
    );
};

export default Register;