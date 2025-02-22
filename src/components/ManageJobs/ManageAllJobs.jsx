import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import { PiHandWavingLight } from 'react-icons/pi';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

const ManageAllJobs = () => {

    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: jobs = [], isLoading, refetch } = useQuery({
        queryKey: ['jobs', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs`);
            return res.data;
        }
    });

    const handleDelete = (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete the job post...?",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/jobs/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            toast.success('job deleted successful !', {
                                duration: 1000,
                                position: 'top-center',
                            })
                        }
                    })
            }
        }); 
    }

    if(isLoading){
        return <Loading></Loading>
    }

    return (
        <div>
            <div className='flex items-center gap-3 mt-5 mb-10'>
                <p className='bg-green-500 w-3 h-9'></p>
                <h3 className="text-2xl font-medium">All Jobs</h3>
            </div>
            <Helmet>
                <title>Manage Jobs</title>
            </Helmet>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Title & Skills</th>
                            <th>Details</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            jobs.map(job => <tr key={job._id}>
                                <td className='min-w-72'>
                                    <p className='text-lg font-medium'>{job?.jobTitle}</p>
                                    <p><span className='font-medium'>Skills : </span>{job?.jobSkills.split(' ').length > 5
                                        ? job?.jobSkills.split(' ').slice(0, 5).join(' ') + '...'
                                        : job?.jobSkills}</p>
                                </td>
                                <td>
                                    {job?.jobDescription.split(' ').length > 20
                                        ? job?.jobDescription.split(' ').slice(0, 20).join(' ') + '...'
                                        : job?.jobDescription}
                                </td>
                                <th className='flex flex-col gap-4 justify-center items-center'>

                                    <Link to={`/job/${job?._id}`}><button className='font-medium px-3 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded-sm'>Details</button></Link>

                                    <button onClick={() => handleDelete(job?._id)} className='font-medium px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm'>Delete</button>

                                    <Link to={`/updateJobs/${job?._id}`}><button className='font-medium px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-sm'>Update</button></Link>

                                </th>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ManageAllJobs;