import axios from 'axios';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import Loading from '../Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';



const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const PostJobs = () => {

    const axiosSecure = useAxiosSecure()
    const { user, loading } = useAuth()

    const handlePostJob = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const jobTitle = form.get('jobTitle')
        const jobSkills = form.get('jobSkills')
        const photoFile = form.get('photo');
        const jobDescription = form.get('jobDescription')
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
                jobTitle,
                jobSkills,
                cover: imageUrl,
                jobDescription,
                date,
            }
            axiosSecure.post('/jobs', data)
            .then(res =>{
                if(res.data.insertedId){
                    toast.success('Job posted successfully!', {
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


    if (loading) {
        return <Loading></Loading>
    }

    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
            <Toaster></Toaster>
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Create Job</h3>

            <form onSubmit={handlePostJob}>

                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Title*</p>
                    <input required type="text" name="jobTitle" id="" placeholder='Enter Job Title' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Skills*</p>
                    <input required type="text" name="jobSkills" id="" placeholder='Enter Skills' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className="max-sm-text-sm text-medium my-2">Cover Photo*</p>
                    <input required type="file" placeholder="" name="photo" id="" className="border-2 pr-3  w-full" />
                </div>
                <div>
                    <p className="max-sm-text-sm text-medium my-2">Job Description*</p>
                    <textarea required type='text' name="jobDescription" id="" rows={3} className="border-2 px-3 md:py-1 w-full"></textarea>
                    {/* <input type="textArea" placeholder="" name="photo" id="" className="border-2 px-3 md:py-1 w-full" /> */}
                </div>
                <input type="submit" value="Post Job" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
            </form>

        </div>
    );
};

export default PostJobs;