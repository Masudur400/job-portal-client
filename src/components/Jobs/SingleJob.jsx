import React from 'react';
import { Link } from 'react-router-dom';

const SingleJob = ({ job }) => {

    const { jobTitle, jobSkills, cover, jobDescription } = job

    return (
        <Link to='/'>
        <div className='p-3 border-base-200 border rounded-md shadow-sm flex flex-col h-72 hover:shadow-md'>
            <div className='flex-grow'>
                <img src={cover} alt="cover" className='w-96 h-40' />
                <p className='text-lg font-medium my-2'>{jobTitle}</p>
                <p><span className='font-medium'>Skills : </span>{jobSkills.split(' ').length > 5
                        ? jobSkills.split(' ').slice(0, 5).join(' ') + '...'
                        : jobSkills}</p>
            </div>
            <div className='flex justify-center items-center my-5'>
                {/* <Link to='/'><button className='px-2 py-1 rounded-sm font-medium text-white bg-green-500'>View Description</button></Link> */}
            </div>
        </div>
        </Link>
    );
};

export default SingleJob;