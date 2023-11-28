import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AllEmployeeChart from "./AllEmployeeChart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllEmployee = () => {
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()

    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/employee`)
            return res.data;
        }
    })


    const handleVerify = id => {
        axiosSecure.patch(`/employee/${id}`, { verified: true })
            .then(res => {
                console.log(res.data)
            })
        refetch()

    }

    // console.log(employees)
    return (
        <div>
            <SectionTitle
                heading={"Employee List"}
            ></SectionTitle>

            <div>
                {
                    employees?.map(employee => <AllEmployeeChart employee={employee}
                        key={employee._id}
                        handleVerify={handleVerify}
                    ></AllEmployeeChart>)
                }

            </div>
        </div>
    );
};

export default AllEmployee;