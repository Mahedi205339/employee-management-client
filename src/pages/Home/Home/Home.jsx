import Footer from "../../../Sheared/Footer/Footer";
import Banner from "../Banner/Banner";
import Comments from "../Comments/Comments";
import OurServices from "../OurServices/OurServices";
import Testimonials from "../Testimonials/Testimonials";

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <OurServices></OurServices>
            <Testimonials></Testimonials>
            <Comments></Comments>
            <Footer></Footer>
        </div>
    );
};

export default Home;