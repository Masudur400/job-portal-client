
// import { useQuery } from '@tanstack/react-query';
// import React from 'react';
// import useAxiosSecure from '../Hooks/useAxiosSecure';
// import useAxiosPublic from '../Hooks/useAxiosPublic';
// import { Swiper, SwiperSlide } from "swiper/react"; 
// import { Pagination, Navigation } from "swiper/modules";
// import { FaCartPlus, FaRegEye } from "react-icons/fa";

// const Employees = () => {


//     const axiosSecure = useAxiosSecure()
//     const axiosPublic = useAxiosPublic()

//     const { data: employees = [], isLoading, refetch } = useQuery({
//         queryKey: ['employees', axiosPublic],
//         queryFn: async () => {
//             const res = await axiosPublic.get(`/employees`);
//             return res.data;
//         }
//     });

//     if(isLoading){
//         return <p>Loading...</p>
//     }

//     return (
//         <div></div>
         
//     );
// };

// export default Employees;