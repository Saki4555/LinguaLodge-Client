import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useEnrolledClasses = () => {
    const { user } = useAuth();
    const { data: enrolledClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://assignment-12-server-gold.vercel.app/enrolled/${user?.email}`);
            return res.data;
        }
    });
    return [enrolledClasses, loading, refetch];
};

export default useEnrolledClasses;