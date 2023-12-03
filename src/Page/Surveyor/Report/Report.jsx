import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../../hooks/useAxiosPublic";

const Report = () => {
  const axiosPublic = useAxiosPublic();
  const { data: report = [] } = useQuery({
    queryKey: ["report"],
    queryFn: async () => {
      const res = await axiosPublic.get("/api/v1/report");
      return res.data;
    },
  });
  console.log(report);
  return (
    <div>
      <div className="overflow-x-auto border rounded-md">
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <tr className="text-base font-semibold text-dark-01">
              <th>##</th>
              <th>Name</th>
              <th>Email</th>
              <th>Report</th>
            </tr>
          </thead>
          <tbody>
            {report?.map((user, index) => (
              <tr key={user._id}>
                <th>{index + 1}</th>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td className="text-purple-600 text-sm">
                  <p>{user.report}</p>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Report;
