import { useContext } from "react";
import useAxiosPublic from "../../../hooks/useAxiosPublic";
import { AuthContext } from "../../../provider/AuthProvider";

const SurveyCreate = () => {
  const axiosPublic = useAxiosPublic();
  const { user } = useContext(AuthContext);

  const handleCreateSurvey = async (event) => {
    event.preventDefault();
    const form = event.target;

    const createSurvey = {
      email: form.email.value,
      surveyTitle: form.surveyTitle.value,
      category: form.category.value,
      date: form.date.value,
      description: form.description.value,
      question1: form.question1.value,
      question2: form.question2.value,
      question3: form.question3.value,
      question4: form.question4.value,
      question5: form.question5.value,
    };

    // console.log(createSurvey);

    const createSurveyRes = await axiosPublic.post(
      "/api/v1/create-survey",
      createSurvey
    );
    console.log(createSurveyRes.data);
    if (createSurveyRes.data.insertedId) {
      alert("Survey successfully created!");
    }
  };

  return (
    <div className="my-6 p-6">
      <div>
        <h2 className="text-2xl md:text-3xl lg:text-4xl text-center font-bold text-[#1a202c]">
          CREATE <span className="text-dark-03">SURVEY</span>
        </h2>

        <div className="bg-gray-200 p-6 my-5 rounded-md">
          <form onSubmit={handleCreateSurvey}>
            <div className="flex flex-col md:flex-row gap-5 my-5">
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-md w-full outline-none"
                  type="text"
                  name="email"
                  placeholder="Email"
                  defaultValue={user?.email}
                />
              </div>
              <div className="flex-1">
                <input
                  className="bg-white p-2 rounded-md w-full outline-none"
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
                  className="bg-white w-full p-2 rounded-md outline-none"
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
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="date"
                  name="date"
                  required
                />
              </div>
            </div>

            <div className="my-5">
              <textarea
                className="w-full rounded-md resize-none p-2 outline-none"
                name="description"
                rows="3"
                placeholder="Description"
              ></textarea>
            </div>

            {/* question */}
            <div className="space-y-2">
              <div>
                <p className="text-lg text-dark-01">Question 1:</p>
                <input
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="text"
                  name="question1"
                  placeholder="Enter Your Question 1 ?"
                  required
                />
              </div>

              <div>
                <p className="text-lg text-dark-01">Question 2:</p>
                <input
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="text"
                  name="question2"
                  placeholder="Enter Your Question 2 ?"
                  required
                />
              </div>

              <div>
                <p className="text-lg text-dark-01">Question 3:</p>
                <input
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="text"
                  name="question3"
                  placeholder="Enter Your Question 3 ?"
                  required
                />
              </div>

              <div>
                <p className="text-lg text-dark-01">Question 4:</p>
                <input
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="text"
                  name="question4"
                  placeholder="Enter Your Question 4 ?"
                  required
                />
              </div>

              <div>
                <p className="text-lg text-dark-01">Question 5:</p>
                <input
                  className="bg-white w-full p-2 rounded-md outline-none"
                  type="text"
                  name="question5"
                  placeholder="Enter Your Question 5 ?"
                  required
                />
              </div>
            </div>

            <div className="my-5 text-center">
              <input
                className="bg-dark-03  rounded-md p-2 text-white font-semibold text-xl cursor-pointer uppercase w-1/2"
                type="submit"
                value="Create Survey"
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};
export default SurveyCreate;
