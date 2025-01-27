import { useState } from "react";
import Avatar from "react-avatar";
import { AiOutlineClose } from "react-icons/ai";
import { BsCart4 } from "react-icons/bs";
import { LiaTimesSolid } from "react-icons/lia";
import { MdLogout } from "react-icons/md";
import { PiUserCircleThin } from "react-icons/pi";
import { SlMenu } from "react-icons/sl";
import { Link, NavLink } from "react-router-dom";


const NavBar = () => {
    const [profile, setProfile] = useState(false);
    const [user, setUser] = useState(false)
    const [carts] = useState(true)

    const [click, setClick] = useState(false);


    const handleClick = () => setClick(!click);
    const closeMenu = () => {
        setClick(false);
        setProfile(false);
    };




    const routes = <>
        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Home</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/postJobs' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>Post Jobs</NavLink></li>

        <li onClick={() => window.scrollTo({
            top: 0,
            behavior: "smooth",
        })}><NavLink to='/updateJobs' onClick={closeMenu} className={({ isActive }) => isActive ? 'text-green-500 border-b-2 border-green-500 rounded-md p-2' : 'hover:text-green-500 p-2'}>UpdateJobs</NavLink></li>

    </>;



    return (
        <div className="shadow-md border-b border-base-300 fixed z-10 w-full top-0">
            <nav className="container mx-auto bg-base-100">
                <div className='container mx-auto flex justify-between items-center'>

                    {/* Left Section - Logo */}
                    <div className="flex items-center p-2">
                        <div className="flex gap-5 lg:gap-10 justify-start items-center">
                            {/* Burger Icon: visible only on mobile and medium screens */}
                            <div className="lg:hidden mt-1" onClick={handleClick}>
                                {click ? (
                                    <AiOutlineClose className="text-2xl lg:text-3xl cursor-pointer" />
                                ) : (
                                    <SlMenu className="text-2xl lg:text-3xl cursor-pointer" />
                                )}
                            </div>
                            <Link to='/'> <p title="Home" className="text-3xl font-bold">
                                <span className="text-green-500">Job</span><span className="text-xl">Sphere</span>
                            </p>
                            </Link>
                        </div>
                    </div>

                    {/* Center Menu Items (visible only on large screens) */}
                    <ul className="hidden lg:flex space-x-8 items-center justify-center w-full mx-auto font-medium">
                        {routes}
                    </ul>

                    {/* Right Section - User Info */}
                    <div className="flex items-center">
                        {/* user image & button  */}
                        {
                            user ?
                                <div className="mr-2 lg:mr-6">
                                    <div className="relative">
                                        <div className="flex gap-5 md:gap-10 justify-start items-center">
                                            <Link to="/" onClick={() => window.scrollTo({
                                                top: 0,
                                                behavior: "smooth",
                                            })}>
                                                <div className="relative">
                                                    <BsCart4 className="text-[1.8rem]" />
                                                    {
                                                        carts?.length > 0 && <div className=" absolute top-[-10%] right-[-15%] min-w-[20px] min-h-[20px] text-white text-center">
                                                            <span className="text-sm bg-green-500 p-1 rounded-full w-full h-full">
                                                                {carts?.length}
                                                            </span>
                                                        </div>
                                                    }
                                                </div>
                                            </Link>

                                            <div className="flex justify-center items-center border-black rounded-full mt-1">
                                                <Avatar
                                                    // name={name?.charAt(0)}
                                                    src={'photo'} alt='img' className="rounded-full" size="45" onClick={() => setProfile(!profile)}></Avatar>
                                            </div>
                                        </div>
                                        <ul className={`absolute  space-y-5  ${profile ? 'bg-base-100  shadow-lg border md:min-w-32 px-3 py-2 z-[99]  rounded-md right-1  md:right-0' : 'hidden'}`}>
                                            <div className="space-y-1 py-4">
                                                <p className="text-sm font-medium"> User Name</p>
                                                <div className="divider"></div>

                                                <Link to='/' onClick={() => window.scrollTo({
                                                    top: 0,
                                                    behavior: "smooth",
                                                })}> <li onClick={() => setProfile(!profile)} className="flex gap-1 items-center text-sm hover:bg-base-300 px-1  py-1 rounded-md"><span><PiUserCircleThin></PiUserCircleThin></span>Profile</li></Link>

                                                <button className="text-sm w-full flex gap-1 items-center text-green-400 hover:bg-base-300 px-1 py-1 rounded-md">LogOut <MdLogout></MdLogout></button>
                                            </div>
                                        </ul>
                                    </div>
                                </div>
                                : <div className="px-5">
                                    <Link to='/loginRegister/login' className="px-3 py-1  font-bold max-sm:btn-sm bg-green-500 text-white  hover:shadow-md">Login</Link>
                                </div>
                        }
                    </div>
                </div>
            </nav>

            {/* Burger Menu Items (visible only on smaller screens) */}
            <div
                className={`fixed top-0 left-0 w-[250px] h-full bg-base-100 transition-transform duration-500 ease-in-out z-50 ${click ? 'translate-x-0' : '-translate-x-full'} lg:hidden`}
            >
                <div className="sticky top-0 bg-base-100 px-4 py-2 md:py-[11px] border-b border-gray-700">
                    <div className="flex justify-between items-center">
                        <p className="text-3xl font-bold mb-0">
                            <span className="text-green-500">Job</span><span className="text-xl">Sphere</span>
                        </p>
                        <a onClick={closeMenu} className="hover:text-pink-500 cursor-pointer border-2">
                            <LiaTimesSolid className="text-xl lg:text-2xl cursor-pointer" />
                        </a>
                    </div>
                </div>

                {/* Scrollable Content with Hidden Scrollbar */}
                <ul className="overflow-y-scroll px-4 space-y-4 font-medium" style={{ maxHeight: 'calc(100vh - 64px)' }}>
                    <style>{`ul::-webkit-scrollbar { display: none; }`}</style>
                    {routes}
                </ul>
            </div>

            {/* Overlay when burger menu is open */}
            {click && (
                <div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden" onClick={closeMenu}></div>
            )}
        </div>
    );
};

export default NavBar;