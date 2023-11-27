import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AllEmployeeChart from "./AllEmployeeChart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllEmployee = () => {
    const axiosPublic = useAxiosPublic()

    const { data: employees = [] ,refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/employee`)
            return res.data;
        }
    })

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
                        refetch={refetch}
                    ></AllEmployeeChart>)
                }

            </div>
        </div>
    );
};

export default AllEmployee;