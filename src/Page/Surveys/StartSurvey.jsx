import { useLoaderData } from "react-router-dom";
import { BsFillQuestionSquareFill } from "react-icons/bs";
import useAuth from "../../hooks/useAuth";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import { toast } from "react-toastify";

const StartSurvey = () => {
  const { user } = useAuth();
  const survey = useLoaderData();
  const axiosPublic = useAxiosPublic();
  console.log(survey);
  const { surveyTitle, description, question1, _id, category, surveyorEmail } =
    survey || {};
  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    // question
    const question1 = form.question1.value;
    // answer
    const answer1 = form.answer1.value;

    const surveyVote = {
      name: user?.displayName || "User",
      email: user?.email,
      time: new Date().toLocaleTimeString(),
      question1,
      answer1,
      category,
      surveyId: _id,
    };
    console.log(surveyVote);

    const surveyVoteRes = await axiosPublic.post(
      "/api/v1/create-surveyVote",
      surveyVote
    );
    console.log(surveyVoteRes.data);
    console.log(surveyVoteRes.data.message);
    if (surveyVoteRes.data.insertedId) {
      toast.success("Your vote has been done!");
    } else {
      toast.error("You are already voted this survey!");
    }
    form.reset();
  };
  return (
    <div className="max-w-4xl mx-auto my-3 border rounded-lg bg-purple-100 p-3 text-dark-01 border-dark-01">
      <h2 className="text-center text-3xl font-semibold py-3">Start Survey</h2>

      <form onSubmit={handleSubmit}>
        {/* question 1 */}
        <input
          className="  text-2xl text-[#2a2a2a] font-bold outline-none rounded px-3 py-1"
          defaultValue={question1}
          name="question1"
          readOnly
        />

        <div className="flex my-2">
          <label className="mr-3">
            <input type="radio" value="yes" name="answer1" />
            Yes
          </label>
          <label>
            <input type="radio" name="answer1" value="no" />
            No
          </label>
        </div>

        {/* submit button */}
        <div className="my-5">
          <input
            className="bg-dark-03 text-lg font-bold px-4 py-2 rounded cursor-pointer"
            type="submit"
            value="Submit"
          />
        </div>
      </form>
    </div>
  );
};

export default StartSurvey;
