import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";



const usePayments = () => {

    const { user } = useAuth();

    const { data: payments = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['payments', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/payments/${user?.email}`);
            return res.data;
        }
    });
    return [payments, loading, refetch];
};

export default usePayments;