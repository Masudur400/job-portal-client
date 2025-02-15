import axios from 'axios';
import React from 'react';
import { Helmet } from 'react-helmet';
import toast, { Toaster } from 'react-hot-toast';
import useAxiosSecure from '../Hooks/useAxiosSecure';




const imageHostingKey = import.meta.env.VITE_image_hosting_key;
const imageHostingApi = `https://api.imgbb.com/1/upload?key=${imageHostingKey}`;

const AddEmployees = () => {

    const axiosSecure = useAxiosSecure()

    const handleAddEmployee = async (e) => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const employeesName = form.get('employeesName')
        const position = form.get('position')
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
                employeesName,
                position,
                photo: imageUrl,
                date,
            }
            axiosSecure.post('/employees', data)
                .then(res => {
                    if (res.data.insertedId) {
                        toast.success('employee added successfully!', {
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
                <title>Add Employee</title>
            </Helmet>
            <Toaster></Toaster>
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Add Employee</h3>

            <form onSubmit={handleAddEmployee}>

                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Employees Name*</p>
                    <input required type="text" name="employeesName" id="" placeholder='Enter name' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Position*</p>
                    <input required type="text" name="position" id="" placeholder='Enter position' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className="max-sm-text-sm text-medium my-2">Photo*</p>
                    <input required type="file" placeholder="" name="photo" id="" className="border-2 pr-3  w-full" />
                </div>
                <input type="submit" value="Add Employee" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
            </form>

        </div>
    );
};

export default AddEmployees;