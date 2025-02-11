 import React from 'react';
 
 const AddEmployees = () => {
    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
             
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Add Employee</h3>

            <form onSubmit={'handlePostJob'}>

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