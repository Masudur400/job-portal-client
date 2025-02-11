import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import toast, { Toaster } from 'react-hot-toast';
import axios from 'axios';
import Swal from 'sweetalert2';



const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const UpdateJobs = () => {

    const { id } = useParams()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const navigate = useNavigate()

    const { data: job = {}, isLoading, refetch } = useQuery({
        queryKey: ['job', axiosPublic, id],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs/${id}`)
            return res.data
        }
    })

    const { _id, jobTitle, jobSkills, cover, jobDescription, date } = job

    const handleUpdateJob = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const jobTitle = form.get('jobTitle')
        const jobSkills = form.get('jobSkills')
        const photoFile = form.get('photo');
        const jobDescription = form.get('jobDescription')

        try {
            const imageData = new FormData();
            imageData.append('image', photoFile);

            if (photoFile?.name) {
                var imageRes = await axios.post(imageHostingApi, imageData, {
                    headers: {
                        'Content-Type': 'multipart/form-data',
                    },
                });
            }

            const imageUrl = imageRes?.data?.data?.url;

            const updateData = {
                cover: imageUrl || cover,
                date,
                jobTitle,
                jobSkills,
                jobDescription
            }

            const res = await axiosSecure.patch(`/jobs/${_id}`, updateData)

            if (res.data.modifiedCount > 0) {  
                Swal.fire({
                    title: "Success!",
                    text: "job updated successfully.....!",
                    // icon: "success"
                }); 
                refetch()
                navigate('/allJobs')
                
            }


        } catch (error) {
            console.error('Error uploading the image or submitting the form:', error);
        }
    }


    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
            <Toaster></Toaster>
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Update Job</h3>

            <form onSubmit={handleUpdateJob}>

                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Title*</p>
                    <input required defaultValue={jobTitle} type="text" name="jobTitle" id="" placeholder='Enter Job Title' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Skills*</p>
                    <input required defaultValue={jobSkills} type="text" name="jobSkills" id="" placeholder='Enter Skills' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className="max-sm-text-sm text-medium my-2">Cover Photo*</p>
                    <input type="file" placeholder="" name="photo" id="" className="border-2 pr-3  w-full" />
                </div>
                <div>
                    <p className="max-sm-text-sm text-medium my-2">Job Description*</p>
                    <textarea required defaultValue={jobDescription} type='text' name="jobDescription" id="" rows={3} className="border-2 px-3 md:py-1 w-full"></textarea>
                    {/* <input type="textArea" placeholder="" name="photo" id="" className="border-2 px-3 md:py-1 w-full" /> */}
                </div>
                <input type="submit" value="Update Job" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
            </form>

        </div>
    );
};

export default UpdateJobs;