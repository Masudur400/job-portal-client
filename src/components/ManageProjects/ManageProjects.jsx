import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link } from 'react-router-dom';

const ManageProjects = () => {

    const axiosSecure = useAxiosSecure();


    const { data: projects = [], isLoading, refetch } = useQuery({
        queryKey: ['projects', axiosSecure],
        queryFn: async () => {
            const res = await axiosSecure.get('/projects');
            return res.data;
        }
    });

    return (
        <div className="overflow-x-auto">
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
                                    <button className='font-medium px-3 py-1 bg-red-500 hover:bg-red-600 text-white rounded-sm'>View Project</button>
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