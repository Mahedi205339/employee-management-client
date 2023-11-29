import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { Helmet } from "react-helmet";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";

const AllPaymentHistory = () => {
    const axiosPublic = useAxiosPublic()
    const { data: Payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosPublic.get('/payments')
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title>Employee management | Payment</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SectionTitle
            heading={"Your salary history"}
            ></SectionTitle>
            <div>
            <Helmet>
                <title>Employee management | Salary History</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
                <div className="overflow-x-auto">
                    <table className="table table-zebra">
                        {/* head */}
                        <thead>
                            <tr>
                                <th></th>
                                <th>Amount</th>
                                <th>Transaction Id</th>
                                <th>Email</th>
                                <th>Date</th>
                                <th>Status</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                Payments?.map((payment, index) => <tr key={payment._id}>
                                    <th>{index + 1}</th>
                                    <td>$ {payment.price}</td>
                                    <td> {payment.transactionId}</td>
                                    <td> {payment.email}</td>
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    );
};

export default AllPaymentHistory;