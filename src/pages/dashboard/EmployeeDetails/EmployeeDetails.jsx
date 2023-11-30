import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
// import { useEffect, useState } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const EmployeeDetails = () => {

    const axiosPublic = useAxiosPublic()
    const employeeData = useLoaderData()
    console.log(employeeData)

    const { data: worksheetData = [] } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/worksheet`)
            return res.data;
        }
    })
    console.log(worksheetData)
    return (
        <div>
            <SectionTitle
                heading={"Employee Details"}
            ></SectionTitle>
            <div>


            </div>


        </div>
    );
};

export default EmployeeDetails;