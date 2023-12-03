import { AiFillDislike, AiFillLike } from "react-icons/ai";
import { Link, useLoaderData } from "react-router-dom";
import useAxiosPublic from "../../hooks/useAxiosPublic";
import useAuth from "../../hooks/useAuth";
import { useState } from "react";
import { toast } from "react-toastify";
import { useQuery } from "@tanstack/react-query";
import Comment from "./Comment";

const SurveyDetails = () => {
  const { user } = useAuth();
  const survey = useLoaderData();
  const axiosPublic = useAxiosPublic();
  const { surveyTitle, description, _id, category, surveyorEmail } =
    survey || {};
  const [likesCount, setLikesCount] = useState(0);

  // all users data for comment
  const { data: users = [] } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/all-users-for-pro");
      return res.data;
    },
  });
  console.log(users);
  const { data: comment = [] } = useQuery({
    queryKey: ["comment"],
    queryFn: async () => {
      const res = await axiosPublic.get(
        `/api/v1/show-comment?commentId=${_id}`
      );
      return res.data;
    },
  });
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

    console.log(commentInfo, "done");

    const commentRes = await axiosPublic.post("/api/v1/comment", commentInfo);
    if (commentRes.data.insertedId) {
      toast.success("Your comment has been published!");
    }
    form.reset();
    console.log(commentRes.data);
  };

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
    <div className="max-w-6xl mx-auto border border-dark-01 rounded-lg my-6">
      <div className="space-y-2 text-center ">
        <div className="bg-gray-300 rounded-md py-3">
          <h2 className="text-xl text-center md:text-2xl lg:text-3xl font-semibold text-[#2c2a37]">
            Title: {surveyTitle}
          </h2>
          <h2 className="text-xl">Category: {category}</h2>

          <p className="text-[#76757a] text-lg">Description: {description}</p>

          {/* like and dislike */}
          <div className="text-2xl flex items-center gap-2 justify-center">
            <AiFillLike
              onClick={() => handleLike(_id)}
              className="cursor-pointer hover:text-blue-500"
            />{" "}
            {likesCount}
            <AiFillDislike className="cursor-pointer hover:text-blue-500" /> 0
          </div>
          {/* start survey */}
          <div className="my-5">
            <Link to={`/startSurvey/${_id}`}>
              <button className="bg-dark-03 text-white mb-2 font-bold text-lg rounded px-3 py-2">
                Start Survey
              </button>
            </Link>
          </div>
        </div>
        {/* comment */}
        <section className="bg-white py-3 lg:py-6 antialiased">
          <div className="max-w-2xl mx-auto px-4">
            <div className="flex justify-between items-center mb-6">
              <h2 className="text-lg lg:text-2xl font-bold text-gray-900 ">
                Please Comment
              </h2>
            </div>
            <form onSubmit={handleComment} className="mb-6">
              <div className="py-2 px-4 mb-4 bg-white rounded-lg rounded-t-lg border border-dark-01">
                <label htmlFor="comment" className="sr-only">
                  Your comment
                </label>
                <textarea
                  id="comment"
                  name="comment"
                  rows="6"
                  className="px-0 w-full text-sm text-gray-900 border-0 focus:ring-0 focus:outline-none"
                  placeholder="Write a comment..."
                  required
                ></textarea>
              </div>
              <input
                className="bg-dark-03  rounded-sm p-2 text-white font-semibold text-xl cursor-pointer"
                type="submit"
                value="Comment"
              />
              {/* comment button */}
              {users.filter((user) =>
                user?.role == "pro-user" ? (
                  <div className="my-5">
                    <input
                      className="bg-[#79C23F] w-full rounded-sm p-2 text-white font-semibold text-xl cursor-pointer"
                      type="submit"
                      value="Comment"
                    />
                  </div>
                ) : (
                  ""
                )
              )}
            </form>
            <div className="grid grid-cols-1 gap-5">
              {comment.map((item, index) => (
                // <CommentData key={index} data={item} />
                <Comment key={index} data={item}></Comment>
              ))}
            </div>
          </div>
        </section>
        {/* report */}
        <hr />
        <div className="flex items-center justify-center ">
          <form className="my-5">
            <header className="footer-title text-red-500">Report</header>
            <fieldset className="form-control w-80">
              <div className="join">
                <input
                  type="text"
                  placeholder="Report...."
                  className="input input-bordered join-item"
                />
                <button className="btn btn-primary join-item">Report</button>
              </div>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default SurveyDetails;
