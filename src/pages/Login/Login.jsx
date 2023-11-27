/* eslint-disable react/no-unescaped-entities */

import { Link, useLocation, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import loginAnime from '../../assets/Animation -login.json'

const Login = () => {
    const { signIn } = useAuth()
    const navigate = useNavigate();
    const location = useLocation()
    const from = location.state?.from?.pathname || "/";
    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const email = form.email.value;
        const password = form.password.value;
        signIn(email, password)
            .then(result => {
                const user = result.user;
                console.log(user)
                Swal.fire({
                    position: "center",
                    icon: "success",
                    title: "Successfully Logged in",
                    showConfirmButton: false,
                    timer: 1500
                });
                navigate(from, { replace: true })
            })
            .catch(error => console.log(error))

    }




    return (
        <div className="sign-back hero min-h-screen ">
            <Helmet>
                <title> | Login</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero-content flex flex-col md:flex-row">
                <div className="text-center md:w-1/2 lg:text-left">
                    <Lottie animationData={loginAnime}></Lottie>
                </div>
                <div className="card flex-shrink-0 w-full max-w-sm lg:w-1/2">
                    <div className='text-center text-2xl md:text-4xl font-bold'>

                        Log In
                    </div>
                    <form
                        onSubmit={handleSubmit}
                        className='space-y-6 ng-untouched ng-pristine ng-valid'
                    >
                        <div className='space-y-4'>

                            <label htmlFor='email' className='block mb-2 text-sm'>
                                Email address
                            </label>
                            <input
                                type='email'
                                name='email'
                                id='email'
                                required
                                placeholder='Enter Your Email Here'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                data-temp-mail-org='0'
                            />
                        </div>
                        <div>
                            <div className='flex justify-between'>
                                <label htmlFor='password' className='text-sm mb-2'>
                                    Password
                                </label>
                            </div>
                            <input
                                type='password'
                                name='password'
                                autoComplete='new-password'
                                id='password'
                                required
                                placeholder='*******'
                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-cyan-500 bg-gray-200 text-gray-900'
                            />
                        </div>


                        <div>
                            <button
                                type='submit'
                                className='bg-cyan-500 w-full rounded-md py-3 text-white'
                            >
                                Continue
                            </button>
                        </div>
                    </form>

                    <p className='text-center'><small className='text-[#287e6e]'>Don't Have an account? <Link to="/signup"><span className='font-bold'>Sign UP</span></Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div >
        </div >
    );
};

export default Login;