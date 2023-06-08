import { useQuery } from "@tanstack/react-query";
import axios from "axios";


const useClasses = () => {

    const { data: classes = [], isLoading: loading, refetch } = useQuery({
        queryKey: ['classes'],
        queryFn: async() => {
            const res = await axios.get('http://localhost:5000/classes');
            return res.data;
        }
    });
    return [classes, loading, refetch];
};

export default useClasses;