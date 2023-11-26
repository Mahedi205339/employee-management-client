
import './signUp.css'
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import useAxiosPublic from '../../hooks/useAxiosPublic';
import SocialLogin from '../../components/SocialLogin/SocialLogin';
import useAuth from '../../hooks/useAuth';
import { Helmet } from 'react-helmet';
import { uploadImage } from '../../api/utils';
// import { useState } from 'react';

const SignUp = () => {
    const axiosPublic = useAxiosPublic()
    const { createUser, updateUserProfile } = useAuth()
    const navigate = useNavigate()
    // const [error, setError] = useState("")

    const handleSubmit = async event => {
        event.preventDefault()
        const form = event.target
        const name = form.name.value;
        const role = form.role.value;
        const email = form.email.value;
        const salary = form.salary.value;
        const password = form.password.value;
        const image = form.image.files[0]
        console.log(role, name, email, salary, image)

        try {
            const imageData = await uploadImage(image)
            const result = await createUser(email, password)
            console.log(result.user)
            await updateUserProfile(name, imageData?.data?.display_url)
            const userInfo = { name, email
                //  image:imageData.data.display_url
            }
            console.log(userInfo)
            axiosPublic.post('/users', userInfo)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database')
                    }
                })

            Swal.fire({
                position: "center",
                icon: "success",
                title: "Successfully Signed in",
                showConfirmButton: false,
                timer: 1500
            });
            navigate("/")
        }
        catch (err) {
            Swal.fire({
                position: "center",
                icon: "error",
                title:'error',
                showConfirmButton: false,
                timer: 1500
            });
        }

    }





    return (
        <div className="sign-back hero ">
            <Helmet>
                <title> | SignUp</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <div className="hero-content flex flex-col md:flex-row">
                <div className="card flex-shrink-0 w-full  max-w-lg">
                    <div className='text-center text-2xl md:text-4xl font-bold lg:my-12'>
                        Registration

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
                            {/* <div>
                                <label htmlFor='salary' className='block mb-2 text-sm'>
                                    Salary
                                </label>
                                <input
                                    type='number'
                                    name='salary'
                                    id='salary'
                                    required
                                    placeholder='Enter Salary'
                                    className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-rose-500 bg-gray-200 text-gray-900'
                                    data-temp-mail-org='0'
                                />
                            </div> */}
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
                            {/* <div className="">
                                <label className="label">
                                    <span className="label-text"> Login Role</span>
                                </label>
                                <select defaultValue="default" className="select select-bordered w-full " name='role'>
                                    <option value="default" disabled  >Select a role</option>
                                    <option value="admin">Admin</option>
                                    <option value="HR">HR</option>
                                    <option value="employee">Employee</option>

                                </select>
                            </div> */}
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
                        </div>

                        <div>
                            <button
                                type='submit'
                                className='bg-cyan-500 w-full rounded-md py-3 text-white'
                            >
                                SignUP
                            </button>
                        </div>
                    </form>

                    <p className='text-center'><small className='text-[#1a6357] my-3' >Already Have an account? <Link to="/login"><span className='font-bold'>Login</span></Link></small></p>
                    <SocialLogin></SocialLogin>
                </div>
            </div>
        </div>
    );
};

export default SignUp;