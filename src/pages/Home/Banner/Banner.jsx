
import banner1 from '../../../assets/banner.jpg'
import Container from '../../../components/Container/Container';

const Banner = () => {
    return (
        <Container>
            <div id="slide1" className="carousel-item relative   w-full h-[80vh] ">
                <img src={banner1} className="w-full rounded-xl" />
                <div className="absolute h-full flex  bottom-0 items-center bg-gradient-to-r from-[#151515] to-[rgba(21,21,21,0)]">
                    <div className="text-white md:w-1/2  pl-10  md:pl-14 lg:pl-24 ">
                        <h1 className="mb-5 text-2xl md:text-4xl lg:text-5xl font-bold">
                            Employee
                            <span className="text-cyan-600 ml-2">
                                Management
                            </span>
                            {/* <br /> */}
                            <span className='text-xl my-20 md:text-3xl lg:text-4xl'>
                                <span className='text-cyan-600'> Build</span> Your
                                Managing Speed
                            </span>
                        </h1>

                        <p >
                            This website is for a company which is looking,<br />
                            an employee management website
                        </p>

                    </div>
                </div>

            </div>
        </Container >
    );
};

export default Banner;










