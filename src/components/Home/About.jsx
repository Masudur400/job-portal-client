import { TiTick } from "react-icons/ti";
import React from 'react';
import about from '../../assets/images/about.png'
import img from '../../assets/images/1.png'

const About = () => {

    const successes = [
        {
            id: 1,
            name: 'Project Management',
        },
        {
            id: 2,
            name: 'Software Development',
        },
        {
            id: 3,
            name: 'Cloud Solutions',
        },
        {
            id: 4,
            name: 'System Architecture',
        },
        {
            id: 5,
            name: 'Data Analytics',
        },
    ]

    return (
        <div>
            <div className='md:flex gap-5 justify-center items-center my-20'>
                <div className='lg:w-1/2 flex justify-center items-center'>
                    <div className=' relative mb-10'>
                        <img src={about} alt="image" className='w-72 h-72 md:w-96 md:h-96 rounded-full' />
                        <div className='flex gap-3 justify-center items-center px-4 py-2 shadow-md rounded-md border-base-200 bg-base-100 w-fit absolute -bottom-5'>
                            <img src={img} alt="image" className='w-20 h-20 rounded-md' />
                            <div>
                                <p className='text-xl font-bold'>4.2k</p>
                                <p className='text-lg'>Satisfied Clients</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className='md:w-1/2'>
                    <p className='text-pink-700 text-lg font-bold my-2'># About The Company</p>
                    <h2 className="lg:text-4xl text-2xl font-bold">10 year of Experience
                        in IT Solutions</h2>
                    <p className='text-lg my-3'>
                        With over a decade of experience in delivering innovative IT solutions, our company specializes in project management, software development, and system architecture. We excel in web and mobile application development, cloud computing, and data management. Our dedicated team has successfully implemented cutting-edge technologies and streamlined processes, ensuring high-quality, customer-focused solutions. Committed to staying current with industry trends, we help organizations navigate the digital landscape and achieve their technology goals.
                    </p>
                </div>
            </div>
            <div>
                <h2 className="text-4xl font-bold text-center mb-9">Experiences</h2>
                <div className="flex flex-wrap gap-5 justify-between items-center">
                {
                    successes?.map(success => <p key={success.id} className="flex gap-2 justify-center items-center text-lg font-medium"> <span className="p-1 rounded-full bg-green-500 text-white"><TiTick></TiTick></span> {success.name}</p>)
                }
                </div>
            </div>

        </div>
    );
};

export default About;