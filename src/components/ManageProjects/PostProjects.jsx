import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import useAuth from '../Hooks/useAuth';
import axios from 'axios';
import useAxiosSecure from '../Hooks/useAxiosSecure';





const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const PostProjects = () => {

    const {user} = useAuth()
    const axiosSecure = useAxiosSecure()

    const handleAddProject = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const projectName = form.get('projectName')
        const projectURL = form.get('projectURL')
        const photoFile = form.get('photo'); 
        const date = new Date()


        try {
            const imageData = new FormData();
            imageData.append('image', photoFile);

            const imageRes = await axios.post(imageHostingApi, imageData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            const imageUrl = imageRes.data.data.url;
            // console.log(companyName, jobTitle, jobSkills, jobDescription, imageUrl);

            const data = {
                projectName, 
                projectCover: imageUrl, 
                projectURL,
                date,
            }
            // console.log(data)
            axiosSecure.post('/projects', data)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('upload project successfully!', {
                            duration: 1000,
                            position: 'top-center',
                        })
                        e.target.reset()
                    }
                })


        } catch (error) {
            console.error('Error uploading the image or submitting the form:', error);
        }

    }

    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
        <Helmet>
            <title>Add Project</title>
        </Helmet>
        <Toaster></Toaster>
        <h3 className="md:text-3xl text-xl font-medium text-center my-2">Add Project</h3>

        <form onSubmit={handleAddProject}>

            <div>
                <p className='max-sm-text-sm text-medium my-2'>Project Name*</p>
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
                <input type="submit" value="Add Project" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' /> :
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