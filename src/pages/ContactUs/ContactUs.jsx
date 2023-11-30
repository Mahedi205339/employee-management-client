import Container from '../../components/Container/Container';
import SectionTitle from '../../components/SectionTitle/SectionTitle';
const ContactUs = () => {
    return (
        <div >
            
            <Container>
                <div className=" h-[84vh]">
                    <SectionTitle
                    heading={"Contact Us"}
                    subHeading={"send your details"}
                    ></SectionTitle>

                </div>
            </Container>
        </div>
    );
};

export default ContactUs;