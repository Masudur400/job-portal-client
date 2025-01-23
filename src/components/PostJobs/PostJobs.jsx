import React from 'react';

const PostJobs = () => {
    return (
        <div className="md:w-1/2 mx-auto my-20 md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4">
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Create Job</h3>

            <form>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Company Name*</p>
                    <input type="text" name="companyName" id="" placeholder='Enter Job Title' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Title*</p>
                    <input type="text" name="jobTitle" id="" placeholder='Enter Job Title' className='border-2 px-3 md:py-1 w-full' />
                </div>
                <div>
                    <p className='max-sm-text-sm text-medium my-2'>Job Skills*</p>
                    <input type="text" name="jobSkills" id="" placeholder='Enter Skills' className='border-2 px-3 md:py-1 w-full' />
                </div>
            </form>

        </div>
    );
};

export default PostJobs;