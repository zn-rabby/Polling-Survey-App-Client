import { useContext } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";
// import { useQuery } from "@tanstack/react-query";
import { AuthContext } from "../../../provider/AuthProvider";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const SurveyCreate = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const handleCreateSurvey = async (event) => {
    event.preventDefault();
    const form = event.target;

    const createSurvey = {
      // surveyorEmail: singleUser?.email,
      surveyorEmail: user?.email,
      surveyTitle: form.surveyTitle.value,
      category: form.category.value,
      date: form.date.value,
      description: form.description.value,
      question1: form.question1.value,
      time: new Date().toLocaleTimeString(),
    };
    console.log(createSurvey);

    axiosPublic.post("/api/v1/create-survey", createSurvey).then((res) => {
      console.log(res.data);
    });
  };

  return (
    <div className="my-10 p-6">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]">
          CREATE <span className="text-dark-03">SURVEY</span>
        </h2>

        <div className="bg-gray-200 p-6 my-5 rounded-md">
          <form onSubmit={handleCreateSurvey}>
            <div className="flex flex-col md:flex-row gap-5 my-5">
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-sm w-full outline-none"
                  type="text"
                  name="email"
                  placeholder="Email"
                  readOnly
                  // defaultValue={singleUser?.email}
                  defaultValue={user?.email}
                />
              </div>
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-sm w-full outline-none"
                  type="text"
                  name="surveyTitle"
                  placeholder="Survey Title"
                  required
                />
              </div>
            </div>

            <div className="flex flex-col md:flex-row gap-5 my-5">
              <div className="flex-1">
                <select
                  className="bg-white w-full p-2 rounded-sm outline-none"
                  name="category"
                  required
                >
                  <option value="">Select Category</option>
                  <option value="Education">Education</option>
                  <option value="Health Care">Health Care</option>
                  <option value="Ecommerce">Ecommerce</option>
                  <option value="Human Resources">Human Resources</option>
                  <option value="Customers">Customers</option>
                  <option value="Market Research">Market Research</option>
                </select>
              </div>
              <div className="flex-1">
                <input
                  className="bg-white w-full p-2 rounded-sm outline-none"
                  type="date"
                  name="date"
                  required
                />
              </div>
            </div>

            <div className="my-5">
              <textarea
                className="w-full rounded-sm resize-none p-2 outline-none"
                name="description"
                rows="10"
                placeholder="Description"
              ></textarea>
            </div>

            {/* question */}
            <div className="space-y-2">
              <div>
                <p className="text-lg text-[#2a2a2a]">Question 1:</p>
                <input
                  className="bg-white w-full p-2 rounded-sm outline-none"
                  type="text"
                  name="question1"
                  placeholder="Enter Your Question 1 ?"
                  required
                />
              </div>
            </div>

            <div className="my-5">
              <input
                className="bg-[#19cb98] w-full rounded-sm p-2 text-white font-simibold text-xl cursor-pointer"
                type="submit"
                value="Create"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SurveyCreate;
