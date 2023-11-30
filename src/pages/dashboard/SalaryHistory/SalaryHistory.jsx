import { useQuery } from "@tanstack/react-query";
// import useAxiosPublic from "../../../hooks/useAxiosPublic";
import useAuth from "../../../hooks/useAuth";
import Container from "../../../components/Container/Container";
import SectionTitle from "../../../components/SectionTitle/SectionTitle";
import { Helmet } from "react-helmet";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
// import SalaryTable from "./SalaryTable";

const SalaryHistory = () => {
    const { user } = useAuth()
    // const axiosPublic = useAxiosPublic()
    const axiosSecure = useAxiosSecure()
    const { data: Payments = [] } = useQuery({
        queryKey: ['payments'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/payments/${user.email}`)
            return res.data;
        }
    })

    console.log(Payments)

    return (
        <Container>
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
                                    <td>{payment.date}</td>
                                    <td>{payment.status}</td>
                                </tr>)
                            }

                        </tbody>
                    </table>
                </div>
            </div>
        </Container>
    );
};

export default SalaryHistory;