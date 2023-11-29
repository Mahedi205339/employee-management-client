import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import AllEmployeeChart from "./AllEmployeeChart";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import Swal from 'sweetalert2';
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
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Verify"
        }).then(async (result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/employee/HR/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "Verified",
                                text: "He is HR Now",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }

        });
    }




    // console.log(employees)
    return (
        <div>
            <SectionTitle
                heading={"Employee List"}
            ></SectionTitle>
            <div className="max-w-6xl mx-auto my-3 md:my-10">
                {
                    employees?.map(employee => <AllEmployeeChart employee={employee}
                        key={employee._id}
                        handleVerify={handleVerify}
                    ></AllEmployeeChart>)
                }
            </div>


        </div>
    );

}
export default AllEmployee;