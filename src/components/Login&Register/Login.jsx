import { Helmet } from "react-helmet";
import { FaRegEye, FaRegEyeSlash, FaXmark } from "react-icons/fa6"; 
import { Link, useNavigate } from "react-router-dom"; 
import Swal from "sweetalert2"; 
import { useState } from "react"; 
import useAxiosPublic from "../Hooks/useAxiosPublic";
import useAuth from "../Hooks/useAuth";

const Login = () => {

    const { login, loading, setLoading } = useAuth()
    const axiosPublic = useAxiosPublic()
    const navigate = useNavigate()
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('')

    const handleLogin = e => {
        e.preventDefault()
        const form = new FormData(e.currentTarget)
        const email = form.get('email')
        const password = form.get('password')
        // console.table( email,password )

        login(email, password)
            .then(result => {
                if (result?.user) {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Login successful",
                        showConfirmButton: false,
                        timer: 1000
                    });
                    setError('')
                    e.target.reset()
                    navigate(location?.state ? location.state : '/')
                }
            })
            .catch(err => {
                setLoading(false)
                setError(err.message)
                console.log(err.message)
            })
    }


      

    return (
        <div className=" lg:w-1/3 md:w-1/2 mx-auto md:p-5 p-3 rounded-lg border border-x-4 border-green-500 shadow-md max-sm:mx-4 ">
            <Helmet>
                <title>Login</title>
            </Helmet>
            {/* <div className="flex justify-end">
                <Link to='/' className="p-1 border-2 border-green-500 rounded-full"><FaXmark className="md:text-3xl text-green-600 my-0"></FaXmark></Link>
            </div> */}
            <h3 className="md:text-3xl text-xl font-medium text-center my-2">Please LogIn</h3>
            <form onSubmit={handleLogin} className="">
                <div>
                    <p className="max-sm-text-sm  my-2">Email*</p>
                    <input type="email" name="email" placeholder="Your Email" id="" className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2" />

                </div>
                <p className="max-sm-text-sm  my-2">Password*</p>
                <div className="relative">
                    <input className="border-2 border-base-300 bg-base-100 rounded-md w-full text-sm md:text-base px-4  py-1 mb-2" type={showPassword ? "text" : "password"} name="password" placeholder="Password" id="password" required />
                    <span className="absolute md:top-1/4 top-[5px] right-3" onClick={() => setShowPassword(!showPassword)}>
                        {showPassword ? <FaRegEyeSlash></FaRegEyeSlash> : <FaRegEye></FaRegEye>}
                    </span>
                </div>
                <div>
                    {
                        error ?
                            <p className='text-sm text-red-500'>please give your right email and password</p> : ''
                    }
                    {
                        loading ?
                            <button disabled className="px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600"><span className="loading loading-spinner loading-md"></span></button>
                            :
                            <input disabled={loading} type="submit" value="Login" className='px-3 py-1 text-white font-medium bg-green-500 w-full my-4 hover:bg-green-600' />
                    }
                     
                </div>
            </form>
            <p className="my-3">Do not have an account <Link to='/loginRegister/register' className="text-red-500 font-medium">Please Register</Link></p>
            {/* <div className="divider my-5"></div>
            <div className="mb-t flex justify-center items-center">
                 
                     

                    <button onClick={handleGoogleLogin}
                        className="border border-[#e5eaf2] rounded-md py-2 px-4 flex items-center gap-[10px] text-[1rem] text-[#424242] hover:bg-gray-50 transition-all duration-200">
                        <img src="https://i.ibb.co/dQMmB8h/download-4-removebg-preview-1.png" alt="google logo"
                            className="w-[23px]" />
                        Sign in with Google
                    </button>

                
            </div> */}
        </div>
    );
};

export default Login;