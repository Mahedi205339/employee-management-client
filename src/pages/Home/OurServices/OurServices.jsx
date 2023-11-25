import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceCart from "../ServiceCart/ServiceCart";
import Container from "../../../components/Container/Container";


const OurServices = () => {
    const [services, setServices] = useState([])
    useEffect(() => {
        fetch('/services.json')
            .then(res => res.json())
            .then(data => setServices(data))
    }, [])

    return (
        <Container>
            <div >
                <SectionTitle
                    heading={"Our Services For You"}
                    subHeading={"We are trying to make skill full our youth"}
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {
                        services?.map(service => <ServiceCart service={service} key={service.id}></ServiceCart>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default OurServices;