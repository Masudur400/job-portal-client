import React from 'react';

const SingleEmploye = ({employ}) => {

    const {employeesName, position, photo} = employ

    return (
        <div className='p-2 shadow-md rounded-md space-y-3'>
            <img src={photo} alt="photo" className='w-96 h-60'/>
            <p className='text-lg font-medium'>Name : {employeesName}</p>
            <p>{position}</p>
        </div>
    );
};

export default SingleEmploye;