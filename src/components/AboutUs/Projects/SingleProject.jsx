import React from 'react';
import { Link } from 'react-router-dom';

const SingleProject = ({project}) => {
    
    const {projectName,technologies,projectCover,projectURL,date} = project

    return (
        <div className='space-y-3 shadow-md p-3 rounded-sm group flex flex-col'>
            <img src={projectCover} alt="img" className='group-hover:scale-105 h-64' />
            <div className='flex-grow'>
            <p className='text-lg font-medium'>{projectName}</p>
            <p className='text-sm'>{technologies}</p>
            </div>
            <Link to={projectURL} target='blank'><button className='px-3 py-1 my-3 text-white font-medium bg-green-500 w-full rounded-sm hover:bg-green-600'>View Project</button></Link>
        </div>
    );
};

export default SingleProject;