import { useContext, useEffect, useState } from "react";
import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../../../sharedComponents/Navbar/Navbar";
import { AiFillLike, AiFillDislike } from "react-icons/ai";
import { AuthContext } from "../../../AuthProvider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { FaComment } from "react-icons/fa";
import { useQuery } from "@tanstack/react-query";
import CommentData from "./CommentData";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const SurveyDetails = () => {
  const details = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);
  const axiosSecure = useAxiosSecure();
  const [likesCount, setLikesCount] = useState(0);
  const { surveyTitle, description, _id, surveyorEmail } = details || {};

  // console.log(details);

  // all users data for comment
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/all-users-for-pro");
      return res.data;
    },
  });
  console.log(users);

  const handleLike = async (_id) => {
    setLikesCount((prevLikesCount) => prevLikesCount + 1);

    // Send the PATCH request to update likes count
    const res = await axiosPublic.patch(`/api/v1/survey/like/${_id}`, {
      userName: user?.displayName,
      userEmail: user?.email,
      likesCount: likesCount + 1,
    });

    // Log the response data
    console.log(res.data);
  };

  // comment
  const handleComment = async (event) => {
    event.preventDefault();
    const form = event.target;
    const comment = form.comment.value;

    const commentInfo = {
      comment,
      commentId: _id,
      name: user?.displayName,
      email: user?.email,
      photo: user?.photoURL,
    };

    // console.log(comment,'done');

    const commentRes = await axiosPublic.post("/api/v1/comment", commentInfo);
    if (commentRes.data.insertedId) {
      toast.success("Your comment has been published!");
    }
    form.reset();
    console.log(commentRes.data);
  };

  const { data: comment = [], refetch } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/v1/show-comment?commentId=${_id}`
      );
      return res.data;
    },
  });
  // console.log(comment);
  // console.log(_id);
  useEffect(() => {
    const intervalId = setInterval(() => {
      refetch();
    }, 5000); // Adjust the polling interval as needed (e.g., every 5 seconds)

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, [refetch]);

  // report
  const handleReport = async (event) => {
    event.preventDefault();
    const form = event.target;
    const report = form.report.value;

    const reportInfo = {
      surveyorEmail: surveyorEmail,
      email: user?.email,
      name: user?.displayName || "User",
      reportId: _id,
      report,
      surveyTitle: surveyTitle,
    };
    console.log(reportInfo);

    // user send report in serverside
    const createReportRes = await axiosSecure.post(
      "/api/v1/create-report",
      reportInfo
    );
    console.log(createReportRes.data);
    if (createReportRes.data.insertedId) {
      toast.success("Report send successfully!");
    }
    form.reset();
  };

  return (
    <div className="my-10">
      {/* Navbar */}
      <Navbar />

      <div className="space-y-2">
        <h2 className="text-2xl md:text-3xl lg:text-4xl font-semibold text-[#2c2a37]">
          {surveyTitle}
        </h2>

        <p className="text-[#76757a] text-lg text-justify">{description}</p>

        {/* like and dislike */}
        <div className="text-2xl flex items-center gap-2">
          <AiFillLike
            onClick={() => handleLike(_id)}
            className="cursor-pointer hover:text-blue-500"
          />{" "}
          {likesCount}
          <AiFillDislike className="cursor-pointer hover:text-blue-500" /> 0
        </div>
      </div>

      {/* start survey */}
      <div className="my-5">
        <Link to={`/startSurvey/${_id}`}>
          <button className="bg-[#5ae4a7] text-[2a2a2a] font-bold text-lg rounded px-3 py-2">
            Start Survey
          </button>
        </Link>
      </div>

      {/* comment */}
      <form onSubmit={handleComment}>
        <div className="flex gap-5">
          <FaComment className="text-6xl md:text-7xl lg:text-8xl" />

          <textarea
            className=" w-full md:h-40 border-2 border-gray-300 p-4 text-[2a2a2a] text-lg "
            name="comment"
            placeholder="Share your thoughts..."
          ></textarea>
        </div>

        {/* comment button */}
        <div className="my-5">
          <div className="text-end">
            <input
              className="bg-[#79C23F]  rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
              type="submit"
              value="Comment"
            />
          </div>
        </div>
      </form>

      <div className="grid grid-cols-1 gap-5">
        {comment.map((item, index) => (
          <CommentData key={index} data={item} />
        ))}
      </div>

      {/* Report */}
      <form onSubmit={handleReport} className="my-10">
        <h2 className=" text-xl md:text-2xl font-semibold text-red-500 my-2">
          Report:
        </h2>
        <textarea
          name="report"
          className="border border-black outline-red-500 md:w-1/2 p-2 md:p-4 placeholder:text-red-500 placeholder:text-base"
          placeholder="Enter Your Report..."
        ></textarea>

        {/* button */}
        <div>
          <input
            className="px-4 py-2 bg-red-500 font-bold text-white rounded text-base md:text-lg"
            type="submit"
            value="Report"
          />
        </div>
      </form>

      <ToastContainer />
    </div>
  );
};

export default SurveyDetails;
