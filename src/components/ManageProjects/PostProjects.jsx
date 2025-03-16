import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';

const PostProjects = () => {

    const {user} = useAuth()

    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
        <Helmet>
            <title>Add Employee</title>
        </Helmet>
        <Toaster></Toaster>
        <h3 className="md:text-3xl text-xl font-medium text-center my-2">Add Project</h3>

        <form onSubmit={"handleAddProject"}>

            <div>
                <p className='max-sm-text-sm text-medium my-2'>Employees Name*</p>
                <input required type="text" name="projectName" id="" placeholder='Enter name' className='border-2 px-3 md:py-1 w-full' />
            </div>
            <div>
                <p className='max-sm-text-sm text-medium my-2'>Project Live URL*</p>
                <input required type="text" name="projectURL" id="" placeholder='Enter position' className='border-2 px-3 md:py-1 w-full' />
            </div>
            <div>
                <p className="max-sm-text-sm text-medium my-2">Project Cover*</p>
                <input required type="file" placeholder="" name="photo" id="" className="border-2 pr-3  w-full" />
            </div>
            {
                user?
                <input type="submit" value="Add Employee" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' /> :
                <button onClick={()=>toast.error('please login', {
                    duration: 1000,
                    position: 'top-center',
                })}  className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600'>Add Employee</button>
            }
        </form>

    </div>
    );
};

export default PostProjects;