
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import useAuth from "./useAuth";

const useInstructorClasses = () => {

    const { user } = useAuth();

    const { data: instructorClasses = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes', user?.email],
        queryFn: async () => {
            const res = await axios.get(`https://assignment-12-server-gold.vercel.app/classes/${user?.email}`);
            return res.data;
        }
    });
    // console.log(instructorClasses);
    return [instructorClasses, loading, refetch];
};

export default useInstructorClasses;