import React, { useState } from 'react';
import useAuth from '../Hooks/useAuth';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { useQuery } from '@tanstack/react-query';
import { AiOutlineClose } from 'react-icons/ai';
import { SlMenu } from 'react-icons/sl';
import { Link, NavLink } from 'react-router-dom';
import { LiaTimesSolid } from 'react-icons/lia';
import Avatar from 'react-avatar';
import { PiUserCircleThin } from 'react-icons/pi';
import { MdLogout } from 'react-icons/md';

const DashboardNavBar = () => {
    const [profile, setProfile] = useState(false)
    const { user, logOut, loading } = useAuth()
    const axiosSecure = useAxiosSecure()
    const [click, setClick] = useState(false);

    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false)
        setProfile(false)
    };

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
        return <p className="opacity-90 text-center mt-4">Loading...</p>
    }

    const routes = <>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/postJobs' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Post Jobs</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/allJobs' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>All Jobs</NavLink></li>

        {
            role === 'Admin' && <li onClick={() => window.scrollTo({
                top: 0,
                behavior: "smooth",
            })}><NavLink to='/manageUsers' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Manage Users</NavLink></li>
        }


        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/addEmployee' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Add Employees</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/manageEmployee' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Manage Employees</NavLink></li>



    </>

    return (
        <div className='shadow-md border-b fixed z-10 w-full top-0'>
            <nav className="flex justify-between shadow-md items-center bg-base-100 fixed w-full z-10">
                <div className='container mx-auto flex items-center justify-between p-2'>
                    <div className="">
                        <div className="flex gap-5 lg:gap-10 justify-center items-center">
                            {/* Burger Icon */}
                            <div onClick={handleClick}>
                                {click ? (
                                    <AiOutlineClose className="text-xl lg:text-2xl cursor-pointer" />
                                ) : (
                                    < SlMenu className="text-xl lg:text-2xl cursor-pointer" />
                                )}
                            </div>
                            <div>
                                <Link to='/'><p title="Home" className="lg:text-4xl text-xl md:text-2xl font-bold">
                                    <span className="">NextGen</span><span className="text-xl"></span>
                                </p> </Link>
                            </div>
                        </div>

                        {/* Menu Items */}
                        <div
                            className={`fixed top-0 left-0 w-[250px] h-full bg-base-200 transition-transform duration-500 ease-in-out z-50 ${click ? 'translate-x-0' : '-translate-x-full'
                                }`}
                        >
                            {/* Fixed Header in Burger Menu */}
                            <div className="sticky top-0 bg-base-200 px-4 py-3 md:py-4 border-b border-gray-700">
                                <div className="flex justify-between items-center">
                                    <p className="lg:text-4xl text-xl md:text-2xl font-bold">
                                        <span className="">NextGen</span><span className="text-xl"> </span>
                                    </p>
                                    <a onClick={closeMenu} className="hover:text-pink-500 cursor-pointer border-2">
                                        <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                                    </a>
                                </div>
                            </div>

                            {/* Scrollable Content with Hidden Scrollbar */}
                            <ul
                                className="overflow-y-scroll p-4 space-y-6"
                                style={{
                                    maxHeight: 'calc(100vh - 64px)',
                                    scrollbarWidth: 'none',
                                    msOverflowStyle: 'none'
                                }}
                            >
                                {/* Hide Scrollbar for WebKit Browsers */}
                                <style>{` ul::-webkit-scrollbar { display: none; } `}</style>

                                {routes}

                            </ul>
                        </div>

                        {/* Overlay */}
                        {click && (
                            <div
                                className="fixed inset-0 bg-black bg-opacity-50 z-40"
                                onClick={closeMenu}
                            ></div>
                        )}
                    </div>


                    {
                        user ?
                            <div className="mr-2 lg:mr-6">
                                <div className='relative'>
                                    <div className="avatar">
                                        <div className="w-10 md:w-12 h-10 md:h-12 flex justify-center items-center border-black rounded-full">
                                            <Avatar name={name?.charAt(0)} src={photo} alt='img' className="rounded-full" size="45" onClick={() => setProfile(!profile)}></Avatar>
                                        </div>
                                    </div>
                                    <ul className={`absolute space-y-5 ${profile ? 'bg-base-100  shadow-lg border md:min-w-32 px-3 py-2 z-[99]  rounded-md right-1 md:right-0' : 'hidden'}`}>
                                        <div className="space-y-2 py-4">
                                            <p className="text-sm font-medium">{name}</p>
                                            <div className="divider"></div>
                                            <Link to='/profile'> <li onClick={() => setProfile(!profile)} className="flex gap-1 items-center text-sm hover:bg-base-300 px-2 py-1 rounded-md"><span><PiUserCircleThin></PiUserCircleThin></span>Profile</li></Link>
                                            <button onClick={() => logOut()} className="text-sm w-full flex gap-1 items-center text-red-400  hover:bg-base-300 px-2 py-1 rounded-md">LogOut <MdLogout></MdLogout></button>
                                        </div>
                                    </ul>
                                </div>
                            </div>
                            : <div>
                                <Link to='/loginRegister/login' className="btn font-bold max-sm:btn-sm text-white bg-green-400 hover:bg-green-500">Login</Link>
                            </div>
                    }
                </div>
            </nav>
        </div>
    );
};

export default DashboardNavBar;