import { useQuery } from "@tanstack/react-query";
import useAuth from "../../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const PaymentHistory = () => {
    const { user } = useAuth()
    // const axiosSecure = useAxiosSecure()
    const axiosPublic = useAxiosPublic()
    const { data: payments = [] } = useQuery({
        queryKey: ['payments', user.email],
        queryFn: async () => {
            const res = await axiosPublic.get(`/payments/${user.email}`)
            return res.data;
        }
    })
    return (
        <div>
            <Helmet>
                <title> Payment History</title>
                <link rel="canonical" href="https://www.tacobell.com/" />
            </Helmet>
            <SectionTitle
                heading={"Payment History"}
            ></SectionTitle>
            <h2>Total Payments :{payments.length}</h2>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                        <tr>
                            <th></th>
                            <th>Amount</th>
                            <th>Transaction Id</th>
                            <th>Date</th>
                            <th>Status</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            payments.map((payment, index) => <tr key={payment._id}>
                                <th>{index + 1}</th>
                                <td>$ {payment.price}</td>
                                <td> {payment.transactionId}</td>
                                <td>{payment.date}</td>
                                <td>{payment.status}</td>
                            </tr>)
                        }

                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default PaymentHistory;