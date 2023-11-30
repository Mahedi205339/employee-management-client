/* eslint-disable no-undef */
// import { uploadImage } from "../../api/utils";
import SectionTitle from "../../components/SectionTitle/SectionTitle";
import useAuth from "../../hooks/useAuth";

import Swal from 'sweetalert2';
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Registration = () => {
    const { user } = useAuth()
    const axiosPublic = useAxiosPublic()
    const handleRegistration = event => {
        event.preventDefault()
        const form = event.target;
        const name = form.name.value;
        const salary = form.salary.value;
        const accountNumber = form.accountNumber.value;

        const employeeData = {
            name, accountNumber, salary, image: user.photoURL,
            verified: false,
            designation: 'employee',
            email: user?.email
        }
        console.log(employeeData)
        try {

            axiosPublic.post('/employee', employeeData)
                .then(res => {
                    if (res.data.insertedId) {
                        console.log('user added to the database', res.data)
                    }
                })
            Swal.fire({
                position: "center",
                icon: "success",
                title: "Data send successfully",
                showConfirmButton: false,
                timer: 1500
            });
        }
        catch (err) {
            console.log(err)
        }

    }



    return (
        <div className="max-w-5xl mx-auto p-5">
            <SectionTitle
                heading={"Registration As Employee"}
            ></SectionTitle>
            <form onSubmit={handleRegistration}>
                <div className="form-control w-full my-6">
                    <label className="label">
                        <span className="label-text"> Name*</span>
                    </label>
                    <input
                        type="text"
                        name="name"
                        placeholder=" Name"
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="flex gap-6">
                

                    {/* salary */}
                    <div className="form-control w-full my-6">
                        <label className="label">
                            <span className="label-text">Salary*</span>
                        </label>
                        <input
                            type="number"
                            name="salary"
                            placeholder="Price"
                            className="input input-bordered w-full" />
                    </div>

                </div>

                <div className="form-control w-full ">
                    <label className="label">
                        <span className="label-text"> Bank Account No*</span>
                    </label>
                    <input
                        type="text"
                        name="accountNumber"
                        placeholder=" Account No.."
                        required
                        className="input input-bordered w-full" />
                </div>
                <div className="form-control w-full my-7">

                </div>



                <div className=" text-center ">
                    <button type="submit" className="px-2 py-1 font-bold bg-blue-700 text-white hover:bg-blue-500 md:px-10 rounded-lg">
                        Confirm
                    </button>
                </div>


            </form>
        </div>

    );
};

export default Registration;