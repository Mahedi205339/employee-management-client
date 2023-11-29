import { useState } from "react";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAuth from "../../../hooks/useAuth";
import DatePicker from "react-datepicker";
import 'react-datepicker/dist/react-datepicker.css';
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import Swal from 'sweetalert2';
const WorkShitEmployee = () => {
    const { user } = useAuth()
    const [startDate, setStartDate] = useState(null);
    const axiosPublic = useAxiosPublic()
    const handleSubmit = event => {
        event.preventDefault()
        const form = event.target;
        const workHoursStr = form.workHours.value;
        const workHours = parseFloat(workHoursStr)
        const task = form.task.value;
        const date = form.date.value;
        console.log(workHours, task, date)
        const employeeWorksheet = {
            workHours, task, date, email: user?.email,
            image: user?.photoURL
        }
        axiosPublic.post('/worksheet', employeeWorksheet)
            .then(res => {
                if (res.data.insertedId) {
                    console.log('worksheet added to the database')
                }
            })
        Swal.fire({
            position: "center",
            icon: "success",
            title: "Successfully Signed in",
            showConfirmButton: false,
            timer: 1500
        });

    }
    return (
        <div className="p-5">
            <SectionTitle
                heading={`${user?.displayName}'s Work Shit`}
            ></SectionTitle>
            <div>
                <form onSubmit={handleSubmit}>

                    <div className="flex gap-6">

                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Tasks*</span>
                            </label>
                            <select
                                name="task"
                                className="select select-bordered w-full">
                                <option disabled value="default">select a task</option>
                                <option value="sales">Sales</option>
                                <option value="paper-work">Paper Work</option>
                                <option value="content">Content</option>
                            </select>
                        </div>

                        {/* salary */}
                        <div className="form-control w-full my-6">
                            <label className="label">
                                <span className="label-text">Hours Worked*</span>
                            </label>
                            <select
                                name="workHours"
                                className="select select-bordered w-full">
                                <option disabled value="default">select your hour</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                                <option value="4">4</option>
                                <option value="5">5</option>
                                <option value="6">6</option>
                                <option value="7">7</option>
                                <option value="8">8</option>
                                <option value="9">9</option>
                                <option value="10">10</option>

                            </select>
                        </div>

                    </div>

                    <div className="form-control w-full ">

                    </div>
                    <div className="form-control w-44 my-7">
                        <label className="label">
                            <span className="label-text">Date*</span>
                        </label>
                        <DatePicker name="date" selected={startDate} onChange={(date) => setStartDate(date)}
                            placeholderText="Chose date"
                        ></DatePicker>
                    </div>



                    <div className=" text-center ">
                        <button type="submit" className="px-2 py-1 font-bold bg-blue-700 text-white hover:bg-blue-500 md:px-10 rounded-lg">
                            Confirm
                        </button>
                    </div>


                </form>
            </div>

        </div>
    );
};

export default WorkShitEmployee;