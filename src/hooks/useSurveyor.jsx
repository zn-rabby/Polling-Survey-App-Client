import { useQuery } from "@tanstack/react-query";
import useAuth from "./useAuth";
import useAxiosSecure from "./useAxiosSecure";
// import useAxiosPublic from "./useAxiosPublic";

const useSurveyor = () => {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();
  // const axiosPublic = useAxiosPublic();
  const { data: isSurveyor, refetch } = useQuery({
    queryKey: [user?.email, "isSurveyor"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/users/surveyor/${user.email}`);
      console.log(res.data);
      return res.data?.surveyor;
    },
  });
  return [isSurveyor, refetch];
};

export default useSurveyor;
