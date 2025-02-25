import React from 'react';
import img from '/src/assets/images/handship.jpg'
import Employees from './Employees/Employees';
const AboutUs = () => {
    return (
        <div>
            <div className='md:flex md:flex-row-reverse items-center justify-between gap-10 p-2'>
            <div className='flex-1 flex justify-center'>
                <img src={img} alt="img" className='w-full lg:h-80 ' />
            </div>
            <div className='flex-1 max-sm:mb-5'>
                <h2 className="text-3xl font-bold text-center mb-3">Our Mission</h2>
                <p>At NextGen , our mission is to harness the power of technology to create innovative, efficient, and scalable solutions that empower businesses and individuals. We are committed to delivering high-quality digital products that enhance user experiences, drive business growth, and simplify complex challenges.</p>
                <p>With a focus on cutting-edge technology, creativity, and client success, we aim to bridge the gap between ideas and execution, turning visions into reality. Our goal is to continuously innovate and evolve, ensuring that our solutions remain future-ready and impactful in an ever-changing digital landscape.</p>
            </div> 
        </div>
        <Employees></Employees>
        </div>
    );
};

export default AboutUs;