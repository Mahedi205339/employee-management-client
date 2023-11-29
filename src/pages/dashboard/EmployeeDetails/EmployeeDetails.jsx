import { useEffect, useState } from "react";

// import { useQuery } from "@tanstack/react-query";
import { useLoaderData } from "react-router-dom";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";


const EmployeeDetails = () => {
    const [worksheetData, setWorksheetData] = useState()
    // const axiosPublic = useAxiosPublic()
    const employeeData = useLoaderData()
    console.log(employeeData)

    useEffect(() => {
        fetch(`http://localhost:5000/worksheet/${employeeData.email}`)
            .then(res => res.json())
            .then(data => setWorksheetData(data))
    }, [employeeData])


    console.log(worksheetData)

    return (
        <div>

        </div>
    );
};

export default EmployeeDetails;