import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";


const useEnrolledClasses = () => {
    const { user } = useAuth();
    const { data: enrolledClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['enrolled', user?.email],
        queryFn: async () => {
            const res = await axios.get(`http://localhost:5000/enrolled/${user?.email}`);
            return res.data;
        }
    });
    return [enrolledClasses, loading, refetch];
};

export default useEnrolledClasses;