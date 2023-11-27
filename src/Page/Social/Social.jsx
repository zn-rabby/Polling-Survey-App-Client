import { useContext } from "react";
import { AiFillGoogleCircle } from "react-icons/ai";
import { useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Social = () => {
  const { googleUserCreate } = useContext(AuthContext);
  const axiosPublic = useAxiosPublic();
  const navigate = useNavigate();
  const location = useLocation();

  // const handleGoogleLogin = () => {
  //   googleUserCreate()
  //     .then((result) => {
  //       console.log(result);
  //       const userInfo = {
  //         email: result.user?.email,
  //         name: result.user?.displayName,
  //       };
  //       Swal.fire("Log In", "Successfully Login Now", "success");
  //       navigate(location.state ? location?.state : "/");
  //     })
  //     .catch((error) => {
  //       console.error(error);
  //     });
  // };
  const handleGoogleSingIn = () => {
    googleUserCreate().then((res) => {
      console.log(res.user);
      const userInfo = {
        email: res.user?.email,
        name: res.user?.displayName,
        role: "user",
      };
      axiosPublic.post("/users", userInfo).then((res) => {
        console.log(res.data);
        navigate(location.state ? location?.state : "/");
      });
    });
  };
  return (
    <div className="flex ">
      <button
        onClick={handleGoogleSingIn}
        className="flex w-full justify-center  text-dark-03 items-center text-base font-medium gap-4 border-2 border-dark-03 rounded py-2 px-4"
      >
        <AiFillGoogleCircle className="text-3xl"></AiFillGoogleCircle>
        Continue with Google
      </button>
    </div>
  );
};

export default Social;
