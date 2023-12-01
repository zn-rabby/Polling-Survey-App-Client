import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";

const SurveyDetails = () => {
  const { user } = useAuth();
  const survey = useLoaderData();
  const [likesCount, setLikesCount] = useState(0);
  const { surveyTitle, description, _id, surveyorEmail } = survey || {};

  // all users data for comment
  //   const { data: users = [] } = useQuery({
  //     queryKey: ["users"],
  //     queryFn: async () => {
  //       const res = await axiosPublic.get("/api/v1/all-users-for-pro");
  //       return res.data;
  //     },
  //   });

  const handleLike = async (_id) => {
    setLikesCount((prevLikesCount) => prevLikesCount + 1);

    // Send the PATCH request to update likes count
    const res = await useAxiosPublic.patch(`/api/v1/survey/like/${_id}`, {
      userName: user?.displayName,
      userEmail: user?.email,
      likesCount: likesCount + 1,
    });

    // Log the response data
    console.log(res.data);
  };
  return (
    <div className="max-w-6xl mx-auto border border-dark-01 rounded-lg m-2">
      <div className="space-y-2 text-center">
        <h2 className="text-xl text-center md:text-2xl lg:text-3xl font-semibold text-[#2c2a37]">
          Title: {surveyTitle}
        </h2>

        <p className="text-[#76757a] text-lg ">Description: {description}</p>

        {/* like and dislike */}
        <div className="text-2xl flex items-center gap-2 justify-center">
          <AiFillLike
            onClick={() => handleLike(_id)}
            className="cursor-pointer hover:text-blue-500"
          />{" "}
          {likesCount}
          <AiFillDislike className="cursor-pointer hover:text-blue-500" /> 0
        </div>
        <hr />
        {/* start survey */}
        <div className="my-5">
          <Link to={`/startSurvey/${_id}`}>
            <button className="bg-dark-03 text-white mb-2 font-bold text-lg rounded px-3 py-2">
              Start Survey
            </button>
          </Link>
        </div>
        {/* comment */}
      </div>
    </div>
  );
};

export default SurveyDetails;
