import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import RecentCard from "./RecentCard";

// /api/v1/recent-surveys
const Recent = () => {
  const axiosPublic = useAxiosPublic();

  const { data: recentSurvey = [] } = useQuery({
    queryKey: ["recentSurvey"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/recent-surveys");
      return res.data;
    },
  });
  console.log(recentSurvey);

  return (
    <div className="max-w-7xl mx-auto">
      <h1 className="md:text-5xl text-3xl font-semibold text-center m-4 my-8  border-b-2 border-dark-03 p-2 md:w-96 w-72 mx-auto">
        Recent Survey
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {recentSurvey.map((item, index) => (
          <RecentCard key={index} data={item}></RecentCard>
        ))}
      </div>
    </div>
  );
};

export default Recent;
