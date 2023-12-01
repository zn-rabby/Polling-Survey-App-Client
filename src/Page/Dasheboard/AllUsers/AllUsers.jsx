import { useQuery } from "@tanstack/react-query";
// import useAxiosSecure from "../../../hooks/useAxiosSecure";
import { FaTrash, FaUsers } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../../hooks/useAxiosSecure";

const AllUsers = () => {
  const axiosSecure = useAxiosSecure();
  const { data: users = [], refetch } = useQuery({
    queryKey: ["users"],
    queryFn: async () => {
      const res = await axiosSecure.get("/users");
      return res.data;
    },
  });

  const handleDeleteUser = (user) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosSecure.delete(`/users/${user._id}`).then((res) => {
          if (res.data.deletedCount > 0) {
            refetch();
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          }
        });
      }
    });
  };
  const handleMakeAdmin = (user) => {
    axiosSecure.patch(`/users/admin/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Admin Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  const handleMakeSurveyor = (user) => {
    axiosSecure.patch(`/users/surveyor/${user._id}`).then((res) => {
      console.log(res.data);
      if (res.data.modifiedCount > 0) {
        refetch();
        Swal.fire({
          position: "top-end",
          icon: "success",
          title: `${user.name} is an Surveyor Now!`,
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };
  return (
    <div className="p-8 ">
      <div className="flex justify-evenly my-4">
        <h2 className="text-2xl font-semibold">All Users</h2>
        <h2 className="text-2xl font-semibold">Total Users: {users.length}</h2>
      </div>
      <div>
        <div className="overflow-x-auto border rounded-md">
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <tr className="text-base font-semibold text-dark-01">
                <th>##</th>
                <th>Name</th>
                <th>User Role</th>
                <th>Email</th>
                <th>Make Admin</th>
                <th>Make Surveyor</th>
                <th>Delete</th>
              </tr>
            </thead>
            <tbody>
              {users.map((user, index) => (
                <tr key={user._id}>
                  <th>{index + 1}</th>
                  <td>{user.name}</td>
                  <td>{user.role}</td>
                  <td>{user.email}</td>
                  <td className="text-purple-600 font-semibold text-lg">
                    {user.role === "admin" ? (
                      "Admin"
                    ) : (
                      <button
                        onClick={() => handleMakeAdmin(user)}
                        className="btn btn-ghost font-semibold text-lg"
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td className="text-purple-600 font-semibold text-lg">
                    {user.role === "surveyor" ? (
                      "Surveyor"
                    ) : (
                      <button
                        onClick={() => handleMakeSurveyor(user)}
                        className="btn btn-ghost "
                      >
                        <FaUsers />
                      </button>
                    )}
                  </td>
                  <td>
                    {" "}
                    <button
                      onClick={() => handleDeleteUser(user)}
                      className="btn btn-ghost text-red-600 font-semibold text-lg"
                    >
                      <FaTrash />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AllUsers;
