// import { useEffect, useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import ServiceCart from "../ServiceCart/ServiceCart";
import Container from "../../../components/Container/Container";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";


const OurServices = () => {
    const axiosPublic = useAxiosPublic()

    const { data: services = [] } = useQuery({
        queryKey: ['services'],
        queryFn: async () => {
            const res = await axiosPublic.get('/services')
            return res.data
        }
    })
    console.log(services)

    return (
        <Container>
            <div >
                <SectionTitle
                    heading={"Our Services For You"}
                    subHeading={"We are trying to make skill full our youth"}
                ></SectionTitle>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3 lg:grid-cols-3">
                    {
                        services?.map(service => <ServiceCart service={service} key={service._id}></ServiceCart>)
                    }
                </div>
            </div>
        </Container>
    );
};

export default OurServices;