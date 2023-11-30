import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import SurveyCared from "./SurveyCared";
const Surveys = () => {
  const axiosPublic = useAxiosPublic();

  const { data: survey = [] } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/show-survey");
      return res.data;
    },
  });

  console.log(survey);

  return (
    <div className="max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {survey.map((item, index) => (
          <SurveyCared key={index} data={item} />
        ))}
      </div>
    </div>
  );
};

export default Surveys;
