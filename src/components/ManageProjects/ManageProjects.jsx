import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import toast, { Toaster } from 'react-hot-toast';

const ManageProjects = () => {

    const axiosSecure = useAxiosSecure();


    const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects', axiosSecure],
        queryFn: async () => {
            const res = await axiosSecure.get('/projects');
            return res.data;
        }
    });

    const deleteProject = async (id) =>{ 
        Swal.fire({
            title: "Are you sure?",
            text: "You want to delete the project...?",
            // icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {
                axiosSecure.delete(`/projects/${id}`)
                    .then(res => {
                        if (res.data.deletedCount > 0) {
                            refetch()
                            toast.success('project deleted successful !', {
                                duration: 1000,
                                position: 'top-center',
                            })
                        }
                    })
            }
        }); 
    }

    return (
        <div className="overflow-x-auto">
            <Toaster></Toaster>
            <table className="table">
                {/* head */}
                <thead>
                    <tr> 
                        <th> </th>
                        <th> </th>
                        <th> </th>
                    </tr>
                </thead>
                <tbody>
                    {
                        projects.map(project => <tr key={project._id}>
                            <th className='w-72'><img src={project.projectCover} alt="image" className='w-72' /> </th>
                            <td className='w-76'>
                                <p className='text-lg font-medium'>{project.projectName} </p>
                                <p>{project.technologies} </p>
                            </td>
                            <td className='space-y-4 min-w-76'>
                                <div>
                                    <Link to={project.projectURL} target='blank'><button className='font-medium px-3 py-1 bg-sky-500 hover:bg-sky-600 text-white rounded-sm'>View Project</button></Link>
                                </div>
                                <div>
                                    <button onClick={()=>deleteProject(project._id)} className='font-medium px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm'>View Project</button>
                                </div>
                            </td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default ManageProjects;