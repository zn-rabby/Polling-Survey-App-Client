import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { Link, useParams } from "react-router-dom";
import { FaTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageSurvey = () => {
  const { id } = useParams();
  console.log(id, "id");
  const axiosSecure = useAxiosSecure();
  const { data: survey = [], refetch } = useQuery({
    queryKey: ["survey"],
    queryFn: async () => {
      const res = await axiosSecure.get("/api/v1/show-survey");
      return res.data;
    },
  });
  console.log(survey);

  // delete
  const handleDeleteItem = (item) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        const res = await axiosSecure.delete(
          `/api/v1/delete-survey/${item._id}`
        );
        console.log(res.data);
        if (res.data.deletedCount > 0) {
          refetch();
          Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Deleted Success",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      }
    });
  };

  return (
    <div>
      <div>
        <div className="flex justify-evenly">
          <h2 className="text-3xl">All surveys</h2>
          <h2 className="text-3xl">Total surveys: {survey.length}</h2>
        </div>
        <div>
          <div className="overflow-x-auto">
            <table className="table table-zebra">
              {/* head */}
              <thead>
                <tr>
                  <th>##</th>
                  <th>Title</th>
                  <th>Date</th>
                  <th>Update</th>
                  <th>Delete</th>
                </tr>
              </thead>
              <tbody>
                {survey.map((survey, index) => (
                  <tr key={survey._id}>
                    <th>{index + 1}</th>
                    <td>{survey.surveyTitle}</td>
                    <td>{survey.date}</td>
                    <td>
                      <Link
                        to={`/dashboard/manageSurvey/surveyUpdate/${survey._id}`}
                      >
                        Update
                      </Link>
                    </td>
                    <td>
                      <button
                        onClick={() => handleDeleteItem(survey)}
                        className="text-red-500"
                      >
                        <FaTrashAlt />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ManageSurvey;
