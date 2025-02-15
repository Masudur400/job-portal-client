import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';
import Loading from '../Loading/Loading';
import { Helmet } from 'react-helmet';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const ManageEmployees = () => {

    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: employees = [], isLoading, refetch } = useQuery({
        queryKey: ['employees', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/employees`);
            return res.data;
        }
    });

    const handleDelete = (id) =>{
         Swal.fire({
                    title: "Are you sure?",
                    text: "You want to delete the employee...?",
                    // icon: "warning",
                    showCancelButton: true,
                    confirmButtonColor: "#3085d6",
                    cancelButtonColor: "#d33",
                    confirmButtonText: "Yes, delete it!"
                }).then((result) => {
                    if (result.isConfirmed) {
                        axiosSecure.delete(`/employees/${id}`)
                            .then(res => {
                                if (res.data.deletedCount > 0) {
                                    refetch()
                                    toast.success('employee deleted !', {
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
                <title>Employees</title>
            </Helmet>
            <Toaster></Toaster>
            <div className="overflow-x-auto">
                <table className="table">
                    {/* head */}
                    <thead>
                        <tr>
                            <th>Photo</th>
                            <th>About</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {/* row 1 */}
                        {
                            employees.map(employee => <tr key={employee._id}>
                                <td>
                                    <img src={employee.photo} alt="image" className='w-12 h-12 rounded-full' />
                                </td>
                                <td>
                                    <p className='font-medium text-lg'>{employee.employeesName}</p>
                                    <p>{employee.position}</p>
                                </td>
                                <td> 
                                <button onClick={() => handleDelete(employee?._id)} className='font-medium px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm'>Delete</button>
                                </td>
                            </tr>)
                        }
                    </tbody>

                </table>
            </div>
        </div>
    );
};

export default ManageEmployees;