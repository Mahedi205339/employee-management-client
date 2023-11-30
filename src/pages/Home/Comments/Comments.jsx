import { BsRocketTakeoffFill, BsPersonLinesFill } from 'react-icons/bs'
import { FaDollarSign } from 'react-icons/fa'
import memberImg from '../../../assets/user-1.png'
import './comment.css'
import Container from '../../../components/Container/Container';



const Comments = () => {
    return (
        <Container>
            <div className=''>
                <div className="w-full comment-background hero lg:h-[50vh] h-[100vh]">
                    <div className='flex flex-col justify-center items-center'>
                        <img className='lg:w-28 w-10 my-2' src={memberImg} alt="" />
                        <p className='max-w-5xl text-center lg:text-xl text-gray-400'>
                            We work with industry leading manufacturers and dealerships to develop bespoke products for your customers. Calling upon over 45 years of industry experience, our goal is to provide reassurance and peace of mind to motorists worldwide
                        </p>

                        <h2 className='text-xl text-blue-600 my-4'> Mahedi Hasan</h2>
                        <p>--Director</p>
                    </div>
                </div>
                <div className='my-10'>
                    <h3 className='text-xl md:text-2xl lg:text-4xl uppercase  text-center mb-6 md:mb-10 lg:mb-14'>Our <span className='text-blue-600 font-bold'>Specialties</span></h3>
                    <div className='max-w-7xl mt-4 mx-auto grid grid-cols-1 lg:grid-cols-3 gap-7'>
                        <div className='border border-gray-500 h-20 flex justify-between  rounded items-center '>
                            <div className='p-3'>
                                <h2 className='text-xl md:text-2xl  text-gray-400'>Well Known</h2>
                                <p className='text-gray-500'>We provide our products all over the world .
                                </p>
                            </div>
                            <BsRocketTakeoffFill className='text-5xl lg:text-5xl text-blue-600 lg:-mr-5'></BsRocketTakeoffFill>
                        </div>
                        <div className='border border-gray-500 h-20 flex justify-between  rounded items-center '>
                            <div className='p-3'>
                                <h2 className='text-xl md:text-2xl  text-gray-400'>MONEY GUARANTEE</h2>
                                <p className='text-gray-500'>We provide our products all over the world .
                                </p>
                            </div>
                            <FaDollarSign className='text-5xl text-blue-600  mr-2 lg:-mr-5 '></FaDollarSign>
                        </div>
                        <div className='border border-gray-500 h-20 flex justify-between  rounded items-center '>
                            <div className='p-3'>
                                <h2 className='text-xl md:text-2xl  text-gray-400'>ONLINE SUPPORT</h2>
                                <p className='text-gray-500'>We provide our products all over the world .
                                </p>
                            </div>
                            <BsPersonLinesFill className='text-5xl text-blue-600 mr-2 lg:-mr-5 '></BsPersonLinesFill>
                        </div>
                    </div>

                </div>
            </div>
        </Container>
    );
};

export default Comments;