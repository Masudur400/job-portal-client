import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAuth from '../Hooks/useAuth';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';

const ManageApplies = () => {

    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: applies = [], isLoading, refetch } = useQuery({
        queryKey: ['applies', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/applies`);
            return res.data;
        }
    });

    const cancelApply = async (id) => {
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete the apply...?",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/applies/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            toast.success('apply deleted successful !', {
                                duration: 1000,
                                position: 'top-center',
                            })
                        }
                    })
            }
        });
    }

    if (isLoading) {
        return <Loading></Loading>
    }

    return (
        <div>
            <Helmet>
                <title>Manage Applies</title>
            </Helmet>
            <Toaster></Toaster>
            <div className='flex items-center gap-3 mt-5 mb-10'>
                <p className='bg-green-500 w-3 h-9'></p>
                <h3 className="text-2xl font-medium">All Applies</h3>
            </div>
            <div> 
                <div>
                    <div className="overflow-x-auto">
                        <table className="table">
                            {/* head */}
                            <thead>
                                <tr>
                                    <th>Data</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {/* row 1 */}
                                {
                                    applies.map(apply => <tr key={apply?._id}>

                                        <td className='space-y-1 min-w-96'>
                                            <p className='font-medium text-lg'>{apply.name}</p>
                                            <p className='font-medium text-lg'>{apply.jobTitle}</p>
                                            <p>{apply.email}</p>
                                            <p>{apply.phone}</p>
                                            <p>{apply.jobSkills}</p>
                                        </td>
                                        <td className='space-y-4 min-w-52'>
                                            <p>
                                                <Link to={`${apply.resumeLink}`} target='blank' className='bg-green-500 px-2 py-1 rounded-sm font-medium text-white'>View Resume</Link>
                                            </p>
                                            <p>
                                                {
                                                    user ? <button onClick={() => cancelApply(apply._id)} className='bg-red-500 px-2 py-1 rounded-sm font-medium text-white'>Cancel Apply</button> :
                                                    <button onClick={() => toast.error('please login', {
                                                        duration: 1000,
                                                        position: 'top-center',
                                                    })} className='bg-red-500 px-2 py-1 rounded-sm font-medium text-white'>Cancel Apply</button>
                                                }
                                            </p>
                                        </td>

                                    </tr>)
                                }

                            </tbody>

                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ManageApplies;