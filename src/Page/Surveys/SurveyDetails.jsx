import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";

const SurveyDetails = () => {
  const survey = useLoaderData();
  const { surveyTitle, description, likesCount } = survey;
  return (
    <div>
      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2a37]">
          {surveyTitle}
        </h2>

        <p className="text-[#76757a] text-lg text-justify">{description}</p>

        {/* like and dislike */}
        {/* <div className="text-2xl flex items-center gap-2">
          <AiFillLike
            onClick={() => handleLike(_id)}
            className="cursor-pointer hover:text-blue-500"
          />{" "}
          {likesCount}
          <AiFillDislike className="cursor-pointer hover:text-blue-500" /> 0
        </div> */}
        {/* start survey */}
        {/* <div className="my-5">
          <Link to={`/startSurvey/${_id}`}>
            <button className="bg-[#5ae4a7] text-[2a2a2a] font-bold text-lg rounded px-3 py-2">
              Start Survey
            </button>
          </Link>
        </div> */}
      </div>
    </div>
  );
};

export default SurveyDetails;
