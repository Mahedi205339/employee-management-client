import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";


const Progress = () => {
    const axiosPublic = useAxiosPublic()
    const { data: worksheets = [] } = useQuery({
        queryKey: ['worksheet'],
        queryFn: async () => {
            const res = await axiosPublic.get(`/worksheet`)
            return res.data;
        }
    })
    console.log(worksheets)
    return (
        <div>
             <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Profile</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Active Hours</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                worksheets?.map((worksheet, index) => <tr key={worksheet._id}>
                                    <th>{index + 1}</th>
                                    <td>
                                        <div className="w-32 object-cover">
                                            <img className="rounded-full" src={worksheet.image} alt="" />
                                        </div>
                                    </td>
                                    <td> {worksheet.name}</td>
                                    <td> {worksheet.email}</td>
                                    <td>{worksheet.date}</td>
                                    <td>{worksheet.workHours} Hours</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>

        </div>
    );
};

export default Progress;