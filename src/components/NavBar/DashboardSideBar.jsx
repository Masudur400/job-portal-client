import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { Link, NavLink } from 'react-router-dom';
import { FaAngleDown, FaChevronRight } from 'react-icons/fa';
import { MdLogin, MdLogout } from 'react-icons/md';

const DashboardSideBar = () => {
    const { user, logOut, loading } = useAuth()
    const axiosSecure = useAxiosSecure() 
    const [openJobs, setOpenJobs] = useState(false)
    const [openEmployee, setOpenEmployee] = useState(false) 

    const { data: users = {}, isLoading } = useQuery({
        queryKey: ['users', user?.email, axiosSecure],
        enabled: !loading,
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/${user?.email}`)
            return res.data
        }
    })
    const { photo, name, role } = users;

    if (loading || isLoading) {
        // return <Loading></Loading>
        return <p className="opacity-90 text-center mt-4">Loading...</p>
    }

    return (
        <div className="p-7 space-y-5 font-medium">
            <div>
                <p title="Home" className="lg:text-4xl text-xl md:text-2xl font-bold text-center">
                    <span className="">NextGen</span>
                </p>
                <p className="opacity-90 font-medium text-center">Admin Dashboard</p>
                <p className="opacity-90 text-sm font-medium text-center"> {user?.email}</p>
                <div className="border-b-2 my-3 border-green-500"></div>
            </div>
            <div className="space-y-3">
                <p><NavLink to='/' className={({ isActive }) => isActive ? '  w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Dashboard</NavLink> </p>


                <div className={` ${openJobs ? 'bg-base-200' : ''} bg-opacity-50 space-y-3 rounded-md`}>
                    <p onClick={() => setOpenJobs(!openJobs)} className={`flex justify-between items-center px-3 py-1  hover:bg-base-300 rounded-md cursor-pointer w-full`}><span>Manage Jobs</span> {openJobs ? <FaAngleDown /> : <FaChevronRight />}</p>
                    {
                        openJobs &&
                        <div className="space-y-3 ">
                            <p><NavLink to='/postJobs' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Post Jobs</NavLink> </p>
                            <p><NavLink to='/allJobs' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>All Jobs</NavLink> </p>
                        </div>
                    }
                </div>

                {
                    role === 'Admin' && <p><NavLink to='/manageUsers' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Manage Users</NavLink> </p>
                }

                <p><NavLink to='/manageApplies' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Manage Applies</NavLink> </p>

                <div className={` ${openEmployee ? 'bg-base-200' : ''}  bg-opacity-50 space-y-3 rounded-md`}>
                    <p onClick={() => setOpenEmployee(!openEmployee)} className={`flex justify-between items-center px-3 py-1 hover:bg-base-300  rounded-md cursor-pointer w-full`}><span>Employees</span> {openEmployee ? <FaAngleDown /> : <FaChevronRight />}</p>
                    {
                        openEmployee &&
                        <div className="space-y-3 ">
                            <p><NavLink to='/addEmployee' className={({ isActive }) => isActive ? '   w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Add Employee</NavLink> </p>
                            <p><NavLink to='/ManageEmployee' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>All Employee</NavLink> </p>
                        </div>
                    }
                </div>
 


                <p><NavLink to='/profile' className={({ isActive }) => isActive ? '    w-full bg-green-500 text-white px-3 py-1 block rounded-md' : 'hover:text-green-500 hover:bg-base-300 px-3 py-1 rounded-md w-full block'}>Profile</NavLink> </p>
            </div>

            <div className="border-b-2 mt-2 border-green-500"></div>

            {
                user ?
                    <button onClick={() => logOut()} className=" w-full flex gap-1 items-center text-red-500 hover:bg-base-300 px-3 py-1 rounded-md">LogOut <MdLogout></MdLogout></button>
                    : <div>
                        <Link to='/loginRegister/login' className=" w-full flex gap-1 items-center text-red-500 hover:text-black hover:bg-base-300 px-3 py-1 rounded-md">Login <MdLogin></MdLogin></Link>
                    </div>
            }

        </div>
    );
};

export default DashboardSideBar;