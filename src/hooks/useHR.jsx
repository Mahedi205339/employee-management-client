import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";

const useAdmin = () => {
    const { user } = useAuth()
    console.log(user)
    const axiosSecure = useAxiosSecure()
    const { data: isHR, isPending: isHrLoading } = useQuery({
        queryKey: [user?.email, 'isHR'],
        queryFn: async () => {
            const res = await axiosSecure.get(`/users/hr/${user.email}`);
            console.log(res.data)
            return res.data?.admin
        }
    })
    return [isHR , isHrLoading]
};

export default useAdmin;