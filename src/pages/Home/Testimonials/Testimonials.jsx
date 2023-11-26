import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Pagination } from 'swiper/modules';
import user1 from '../../../assets/user-1.png'
import user2 from '../../../assets/user-2.png'
import user3 from '../../../assets/user-3.png'
import SectionTitle from '../../../components/SectionTitle/SectionTitle';

const Testimonials = () => {
    return (
        <div>
            <SectionTitle
            heading={"Testimonials"}
            subHeading={"Our pleasure to help you in every step"}
            ></SectionTitle>

            <div className='my-7'>
                <div className='max-w-7xl mx-auto relative mt-10  lg:-mt-10'>
                    <Swiper
                        slidesPerView={3}
                        spaceBetween={30}
                        freeMode={true}
                        pagination={{
                            clickable: true,
                        }}
                        modules={[FreeMode, Pagination]}
                        className="mySwiper "
                        breakpoints={{
                            0: {
                                slidesPerView: 1,
                                spaceBetween: 10,
                            },
                            480: {
                                slidesPerView: 2,
                                spaceBetween: 15,
                            },
                            1024: {
                                slidesPerView: 3,
                                spaceBetween: 30,
                            },

                        }}
                    >

                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user1} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Mark Aden</h2>
                                    <p className='font-bold'>New York </p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user2} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Alexa </h2>
                                    <p className='font-bold'>Chicago</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user3} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Alisa shah</h2>
                                    <p className='font-bold'>Ohio</p>
                                </div>
                            </div>

                        </SwiperSlide>
                        <SwiperSlide>
                            <div data-aos="flip-down" className="card w-96  shadow-xl">
                                <div className="card-body">
                                    
                                    <p>With growing competition in every industry in every aspect — from price to technology to innovation — Allwood believes the way to differentiate your brand is through improving customer experience.</p>
                                </div>
                                <figure><img className='w-24 my-2' src={user1} alt="Shoes" /></figure>
                                <div className='text-center'>
                                    <h2 className='font-serif font-semibold'>Aden Mark</h2>
                                    <p className='font-bold'>Las vagus</p>
                                </div>

                            </div>

                        </SwiperSlide>

                    </Swiper>

                </div>



            </div>




        </div>
    );
};

export default Testimonials;