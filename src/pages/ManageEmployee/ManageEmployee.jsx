import useAxiosSecure from "../../hooks/useAxiosSecure";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import ManageEmployeeChart from "./ManageEmployeeChart";
import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { useQuery } from "@tanstack/react-query";
const ManageEmployee = () => {
    const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { data: employees = [], refetch } = useQuery({
        queryKey: ['employees'],
        queryFn: async () => {
            const res = await axiosPublic.get('/employee')
            return res.data
        }
    })

    const handleMakeHR = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Make HR"
        }).then(async (result) => {
            if (result.isConfirmed) {
                axiosSecure.patch(`/employee/admin/${id}`)
                    .then(res => {
                        console.log(res.data)
                        if (res.data.modifiedCount > 0) {
                            refetch()
                            Swal.fire({
                                title: "!",
                                text: "He is HR Now",
                                icon: "success",
                                timer: 1500
                            });
                        }
                    })
            }

        });
    }

    const handleFired = id => {
        console.log(id)
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, fired"
        }).then(async (result) => {
            if (result.isConfirmed) {
                const res = axiosSecure.delete(`/employee/${id}`);
                console.log(res.data)
                refetch()

                Swal.fire({
                    title: "Fired!",
                    text: "Employee fired.",
                    icon: "success",
                    timer: 1500
                });
            }

        });
    }

    console.log(employees)

    return (
        <div>
            <SectionTitle
                heading={"Employee List"}
            ></SectionTitle>
            <div className="max-w-6xl mx-auto my-3 md:my-10">
                {
                    employees?.map(employee => <ManageEmployeeChart employee={employee}
                        key={employee._id}
                        handleFired={handleFired}
                        handleMakeHR={handleMakeHR}
                    ></ManageEmployeeChart>)
                }
            </div>

        </div>
    );
};

export default ManageEmployee;