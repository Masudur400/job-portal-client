import React from 'react';

const Services = () => {

    const services = [
        {
            id:1,
            service: 'Custom Software Development',
            img:'/src/assets/images/download-1.png',
        },
        {
            id:2,
            service: 'Web & Mobile App Development',
            img:'/src/assets/images/download-2.jpg',
        },
        {
            id:3,
            service: 'AI & Machine Learning',
            img:'/src/assets/images/download-3.jpg',
        },
        {
            id:4,
            service: 'Cloud Computing & DevOps',
            img:'/src/assets/images/download-4.jpg',
        },
        {
            id:5,
            service: 'Cybersecurity & Risk Management',
            img:'/src/assets/images/download-5.png',
        },
        {
            id:6,
            service: 'E-Commerce Solutions',
            img:'/src/assets/images/download-6.jpg',
        },
        {
            id:7,
            service: 'Digital Marketing & SEO',
            img:'/src/assets/images/download-7.jpg',
        },
        {
            id:8,
            service: 'Ui/Ux Design',
            img:'/src/assets/images/download-8.png',
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