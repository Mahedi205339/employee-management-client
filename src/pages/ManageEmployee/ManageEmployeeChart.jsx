// import { Link } from "react-router-dom";

const ManageEmployeeChart = ({ employee, handleFired, handleMakeHR }) => {

    const { email, name, salary, image, verified, designation, accountNumber, _id } = employee
    return (
        <div>
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
                    <p className="text-xl font-bold">Role :{designation}</p>
                    <p>Account No:{accountNumber}</p>
                    <div className="card-actions  justify-end">

                        {
                            designation == 'admin' ? '' :

                                <button onClick={() => handleFired(_id)} className=" bg-red-600 flex items-center text-white font-bold gap-1 px-2 py-1 rounded">
                                    Fired
                                </button>

                        }

                        {
                            designation == 'HR' ? '' : designation == 'admin' ? '' :

                                <button onClick={() => handleMakeHR(_id)} className=" bg-blue-600 flex items-center text-white font-bold gap-1 px-2 py-1 rounded">
                                    Make HR
                                </button>

                        }

                    </div>
                </div>
            </div>
        </div >
    );
};

export default ManageEmployeeChart;