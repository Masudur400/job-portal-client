import React, { useState } from 'react';
import Swal from 'sweetalert2';
import useAxiosSecure from '../Hooks/useAxiosSecure';
import { RiEdit2Line } from 'react-icons/ri';
import { AiOutlineCheck } from "react-icons/ai";

const SingleUser = ({ user, idx, refetch }) => {

    const { _id, name, photo, email, role, userCreateTime } = user

    const axiosSecure = useAxiosSecure()
    const [open, setOpen] = useState(false)


    const handleRoleUpdate = async (e) => {
        e.preventDefault()
        const currentRole = e.target.role.value
        const data = {
            photo,
            email,
            name,
            role: currentRole,
            userCreateTime
        }

        const res = await axiosSecure.patch(`/users/${_id}`, data)
        if (res.data.modifiedCount > 0) {
            refetch()
            setOpen(!open)
            Swal.fire({
                position: "top-end",
                icon: "success",
                title: "Role updated",
                showConfirmButton: false,
                timer: 1000
              });
        }
        console.log('clicked');
    }



    return (
        <div className='md:flex gap-10 justify-between items-center border-b mb-1 space-y-1 p-2'>

            <div className='flex flex-1 gap-2 w-full'>
                <div className='flex justify-center items-center mr-3'>
                    <p>{idx + 1}.</p>
                </div>
                <img src={photo} alt="image" className='w-12 h-12' />
                <div>
                    <p className='font-medium'>{name}</p>
                    <p className='opacity-80'>{email}</p>
                </div>
            </div>
            <div className='flex flex-1 justify-center items-center w-full'>
                {
                    role === 'Guest' ?
                        <p><span className='font-medium'>Role :</span> <span className='text-red-500'>{role}</span></p> :
                        role === 'Admin' ?
                            <p><span className='font-medium'>Role :</span> <span className='text-green-500'>{role}</span></p> :
                            <p><span className='font-medium'>Role :</span> <span className='text-sky-500'>{role}</span></p>
                }

            </div>
            <div className=' flex md:flex-1 w-full justify-center items-center'>
                {
                    !open ?
                        <div>
                            {
                                role === 'Admin' ? '' :
                                    <button onClick={() => setOpen(!open)} className='border   hover:shadow-lg text-2xl px-2 py-1 rounded-md max-sm:mb-3 flex gap-1 justify-center items-center'><RiEdit2Line /></button>
                            }
                        </div>
                        :
                        <form onSubmit={handleRoleUpdate} className='flex items-center gap-3 my-2'>
                            <select name="role" id="" className="border-2 border-base-300 bg-base-100 px-4 py-1 rounded-md">
                                <option disabled selected>{user?.role}</option>
                                <option value='Guest'>Guest</option>
                                <option value='Moderator'>Moderator</option>
                                <option value='Admin'>Admin</option>
                            </select>
                            <div>
                                {/* <input type="submit" value="Done" className="w-fit md:px-2 px-1 py-1 text-center rounded-md bg-orange-500 text-white font-normal text-[10px]" /> */}
                                <button type='submit' className='text-green-500 text-2xl p-1 hover:bg-base-200 bg-green-50 rounded-sm'><AiOutlineCheck></AiOutlineCheck></button>
                            </div>
                        </form>
                }
            </div>

        </div>
    );
};

export default SingleUser;