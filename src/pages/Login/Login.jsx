/* eslint-disable react/no-unescaped-entities */
// import { LoadCanvasTemplate } from 'react-simple-captcha';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
// import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import Lottie from 'lottie-react';
import loginAnime from '../../assets/Animation -login.json'
import axios from 'axios';

const Login = () => {
    const handleSubmit = async event =>{
        event.preventDefault()
        const form = event.target 
        const name  = form.name.value;
        const email = form.email.value;
        const password = form.password.value ;
        const image = form.image.files[0]
        const formData = new FormData()
        formData.append('image',image)
        const {data} = await axios.post(`https://api.imgbb.com/1/upload?key=${import.meta.env.VITE_IMAGE_HOSTING_KEY}`,formData)
    console.log({name, email , password  } )
          console.log(data)
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
                            <div>
                                <label htmlFor='email' className='block mb-2 text-sm'>
                                    Name
                                </label>
                                <input
                                    type='text'
                                    name='name'
                                    id='name'
                                    placeholder='Enter Your Name Here'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div>
                            <div>
                                <label htmlFor='image' className='block mb-2 text-sm'>
                                    Select Image:
                                </label>
                                <input
                                    required
                                    type='file'
                                    id='image'
                                    name='image'
                                    accept='image/*'
                                />
                            </div>
                            <div>
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
            </div>
        </div>
    );
};

export default Login;