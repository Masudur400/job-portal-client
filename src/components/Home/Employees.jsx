
import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import useAxiosPublic from '../Hooks/useAxiosPublic';
import { Swiper, SwiperSlide } from "swiper/react"; 
import { Pagination, Navigation } from "swiper/modules";
import { FaCartPlus, FaRegEye } from "react-icons/fa";

const Employees = () => {


    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()

    const { data: employees = [], isLoading, refetch } = useQuery({
        queryKey: ['employees', axiosPublic],
        queryFn: async () => {
            const res = await axiosPublic.get(`/employees`);
            return res.data;
        }
    });

    if(isLoading){
        return <p>Loading...</p>
    }

    return (
        <div></div>
        // <div className="my-10"> 
        //     <div className="shadow-md border-base-300 border p-5 rounded-md"> 
        //         <style >{`.swiper-button-next,
        //         .swiper-button-prev {
        //         color: #ffffff;  
        //         background-color: #848484;  
        //         padding: 10px;
        //         border-radius: 50%;
        //         width: 30px;
        //         height: 30px;
        //         display: flex;
        //         align-items: center;
        //         justify-content: center;
        //         }
        //         .swiper-button-next::after,
        //         .swiper-button-prev::after {
        //       font-size: 18px;}`}</style>
        //         <div className="mt-5 bg-base-200 rounded-md px-2  py-5 ">
        //             <Swiper className=""
        //                 modules={[Pagination, Navigation]}
        //                 spaceBetween={10}
        //                 loop={true}
        //                 navigation
        //                 breakpoints={{
        //                     640: {
        //                         slidesPerView: 3,
        //                     },
        //                     1024: {
        //                         slidesPerView: 5,
        //                     },
        //                 }}
        //             >

        //                 {
        //                     employees.map(employee => <SwiperSlide key={employee._id}>
                                 
        //                         <div className="bg-base-100  border border-base-200 rounded-md p-2">
        //                             <div className='relative'>
        //                                 <img src={employee?.photo} alt="img" className='w-40 mx-auto' />
        //                                  <p className='font-medium'>{employee?.employeesName}</p>
        //                                  <p className='text-sm'>{employee?.position}</p>
        //                             </div>
                                     
        //                         </div>
                                 
        //                     </SwiperSlide>)
        //                 }
        //             </Swiper>
        //         </div>
        //     </div>
        // </div>
    );
};

export default Employees;