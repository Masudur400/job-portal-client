import React from 'react';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { useQuery } from '@tanstack/react-query';

const ManageAllJobs = () => {

    const axiosPublic = useAxiosPublic()

    const { data: jobs = [], isLoading } = useQuery({
        queryKey: ['jobs', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/jobs`);
            return res.data;
        }
    });

    return (
        <div>
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

                                    <button className='font-medium px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-sm'>Details</button>
                                    <button className='font-medium px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-sm'>Delete</button>
                                    <button className='font-medium px-3 py-1 bg-green-500 hover:bg-green-600 text-white rounded-sm'>Update</button>

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