import { ImUserCheck } from "react-icons/im";
import { FaUserTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllEmployeeChart = ({ employee, handleVerify }) => {
    const { email, name, salary, image, verified, designation, accountNumber, _id } = employee
    // console.log(employee)\\


    return (
        <div className="card md:card-side p-6 sm:p-0 object-cover">
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
                <div className="card-actions  justify-center md:justify-end">
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

                    {
                        designation == 'HR' ? '' : designation == 'admin' ? '' :
                            <Link to={`/dashboard/employeeDetails/${email}`}>
                                <button className=" bg-cyan-600 flex items-center text-white font-bold gap-1 px-2 py-1 rounded">
                                    Details
                                </button>
                            </Link>
                    }


                    {
                        designation == 'HR' ? '' : designation == 'admin' ? '' :
                            <Link to={`/dashboard/payment/${email}`}>
                                <button
                                    className=" bg-red-600 flex items-center text-white font-bold gap-1 px-2 py-1 rounded"
                                >Pay Salary
                                </button>
                            </Link>
                    }
                </div>
            </div>
        </div>
    );
};

export default AllEmployeeChart;