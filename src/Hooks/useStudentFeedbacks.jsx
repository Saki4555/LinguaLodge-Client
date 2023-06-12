import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const useStudentFeedbacks = () => {
    const { data: feedbacks = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['feedbacks'],
        queryFn: async() => {
            const res = await axios.get('https://assignment-12-server-gold.vercel.app/feedbacks');
            return res.data;
        }
    });
    return [feedbacks, loading, refetch];
};

export default useStudentFeedbacks;