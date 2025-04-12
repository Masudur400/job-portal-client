import React from 'react';
import img1 from '../../assets/images/download-1.png'
import img2 from '../../assets/images/download-2.jpg'
import img3 from '../../assets/images/download-3.jpg'
import img4 from '../../assets/images/download-4.jpg'
import img5 from '../../assets/images/download-5.png'
import img6 from '../../assets/images/download-6.jpg'
import img7 from '../../assets/images/download-7.jpg'
import img8 from '../../assets/images/download-8.png'

const Services = () => {

    const services = [
        {
            id:1,
            service: 'Custom Software Development',
            img:img1,
        },
        {
            id:2,
            service: 'Web & Mobile App Development',
            img:img2,
        },
        {
            id:3,
            service: 'AI & Machine Learning',
            img:img3,
        },
        {
            id:4,
            service: 'Cloud Computing & DevOps',
            img:img4,
        },
        {
            id:5,
            service: 'Cybersecurity & Risk Management',
            img:img5,
        },
        {
            id:6,
            service: 'E-Commerce Solutions',
            img:img6,
        },
        {
            id:7,
            service: 'Digital Marketing & SEO',
            img:img7,
        },
        {
            id:8,
            service: 'Ui/Ux Design',
            img:img8,
        },
    ]

    return (
        <div className='my-20'>
             <h2 className="text-4xl font-bold text-center mb-9">Our Services</h2>
             <div className='grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3  '>
                {
                    services.map(service => <div key={service.id} className='px-3 py-2 rounded-md shadow-md border border-base-200 md:text-lg font-medium'>
                        <img src={service.img} alt="image" className='w-full h-52 mb-3' />
                        <p className='flex gap-2 justify center items-center'><span>{service.id}.</span>{service.service}</p>
                    </div>)
                }
             </div>
        </div>
    );
};

export default Services;