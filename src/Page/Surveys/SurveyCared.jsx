import { Link } from "react-router-dom";

const SurveyCared = ({ data }) => {
  const { category, surveyTitle, description, _id } = data || {};
  console.log(_id);
  return (
    <div className="border border-dark-01 m-2 p-4 rounded bg-gray-100">
      <div>
        <h1 className="text-xl font-semibold text-dark-01 ">
          Title: {surveyTitle}
        </h1>
        <h2 className="text-dark-01">Category: {category}</h2>
        <p>Description: {description}</p>
        <hr />
        <div className="flex justify-around">
          <small className="text-base text-dark-01 font-semibold">
            like: 00
          </small>
          <small className="text-base text-dark-01 font-semibold">
            voted: 00
          </small>
        </div>
        <hr />
        <Link to={`/surveys/update/${_id}`}>
          <button className="text-lg mt-3 font-medium outline border border-dark-01  py-2 text-white bg-dark-01 rounded w-full text-center">
            Start Survey
          </button>
        </Link>
      </div>
    </div>
  );
};

export default SurveyCared;
