import { ImUserCheck } from "react-icons/im";
import { FaUserTimes } from "react-icons/fa";
// import Swal from "sweetalert2";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
// import axios from "axios";
const AllEmployeeChart = ({ employee, refetch }) => {

    const { email, name, salary, image, verified, designation, accountNumber, _id } = employee
    // console.log(employee)\\

    const axiosPublic = useAxiosPublic()
    const handleVerify = id => {
        axiosPublic.patch(`employee/${id}`)
            .then(res => {
                console.log(res.data)
            })
        refetch()

    }
    return (
        <div className="card card-side p-6 sm:p-0 object-cover">
            <div className="w-32">
                <img className="rounded-full" src={image} alt="Movie" />
            </div>
            <div className="card-body">
                <h2 className="card-title">Name: {name}</h2>
                <p>Email: {email}</p>
                <p>Salary: {salary}</p>
                <p>Status:{
                    verified ? 'verified' : ' Not verified'
                }
                </p>
                <p>Role:{designation}</p>
                <p>Account No:{accountNumber}</p>
                <div className="card-actions justify-end">
                    {
                        verified ?
                            <>
                                <div className=" bg-green-700 flex items-center text-white font-bold gap-1 px-2 py-1 rounded">
                                    <ImUserCheck></ImUserCheck>
                                    Verified</div>
                            </> :
                            <>
                                <button onClick={() => handleVerify(_id)} className=" bg-red-700 flex items-center text-white font-bold gap-1 px-2 py-1 rounded">
                                    <FaUserTimes></FaUserTimes>
                                    verify
                                </button>
                            </>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEmployeeChart;