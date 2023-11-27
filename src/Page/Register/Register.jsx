import { useContext, useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import Social from "../Social/Social";
import { AuthContext } from "../../provider/AuthProvider";
import useAxiosPublic from "../../hooks/useAxiosPublic";

const Register = () => {
  const axiosPublic = useAxiosPublic();
  const { createUser, profileUpdate } = useContext(AuthContext);
  const [isShow, setIsShow] = useState(false);
  const [registerError, setRegisterError] = useState("");
  const [success, setSuccess] = useState("");
  //handleRegister
  const handleRegister = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const photo = e.target.photo.value;
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log(name, email, password, photo);
    // password validation
    if (password.length < 6) {
      setRegisterError("password should be at least 6 characters or longer");
      return;
    } else if (!/[A-Z]/.test(password)) {
      setRegisterError("Your Password should have at least one Uppercase");
      return;
    } else if (!/[`!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?~]/.test(password)) {
      setRegisterError(
        "Your Password should have at least one Special Characters"
      );
      return;
    }
    // rest error
    setRegisterError("");
    setSuccess("");
    // create user
    createUser(email, password)
      .then((result) => {
        console.log(result.user);
        e.target.reset();
        setSuccess("User create successfully");
        // update profile
        profileUpdate(name, photo)
          .then((result) => {
            console.log(result);
            const userInfo = {
              name,
              email,
              role: "user",
            };
            axiosPublic.post("/users", userInfo).then((res) => {
              if (res.data?.insertedId) {
                // reset();
                Swal.fire({
                  title: "Registered!",
                  text: "User created Successfully.",
                  icon: "success",
                });
                // navigate("/");
              }
            });
          })
          .catch((error) => {
            console.error(error);
          });
        // tost
        Swal.fire("Register", "Successfully Register Now", "success");
      })
      .catch((error) => {
        console.error(error);
        setRegisterError(error.message);
      });
  };
  return (
    <div className="mx-4">
      <div className="bg-slate-50 border border-slate-300 rounded-lg max-w-6xl mx-auto m-6 p-4 ">
        <div className="flex flex-col-reverse md:flex-row items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div>
            <img src="https://i.ibb.co/Z2VMjFJ/Frame-1.png" alt="" />
          </div>
          <div className="divider lg:divider-horizontal"></div>
          <div className="w-full   md:mt-0 sm:max-w-md xl:p-0">
            <div className="p-6 sm:p-8">
              <div className="py-4">
                <h1 className="text-xl font-bold leading-tight tracking-tight text-center md:text-2xl">
                  Register for free!
                </h1>
                <p className="text-base text-center font-light text-gray-900">
                  Don’t have an account yet?{" "}
                  <Link to="/login">
                    <button
                      href="#"
                      className="font-semibold text-dark-03 hover:underline "
                    >
                      Login
                    </button>
                  </Link>
                </p>
              </div>
              <form
                onSubmit={handleRegister}
                className="space-y-4 md:space-y-6 my-3"
              >
                {registerError && (
                  <div>
                    <p className="text-red-600 font-bold">{registerError}</p>
                  </div>
                )}
                {success && (
                  <div className="text-blue-600 font-bold">
                    <p>{success}</p>
                  </div>
                )}
                <div>
                  <input
                    type="text"
                    name="name"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Full Name"
                    required
                  />
                </div>
                <div>
                  <input
                    type="text"
                    name="photo"
                    id="text"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Photo URL (Optional)"
                    required
                  />
                </div>
                <div>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 "
                    placeholder="Email Address"
                    required
                  />
                </div>
                <div>
                  <div className="relative flex items-center">
                    <input
                      type={isShow ? "text" : "password"}
                      name="password"
                      id="password"
                      placeholder="Password"
                      className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg  block w-full p-2.5  "
                      required=""
                    />
                    <span
                      className="top-0 -ms-7"
                      onClick={() => setIsShow(!isShow)}
                    >
                      {isShow ? <FaEyeSlash></FaEyeSlash> : <FaEye></FaEye>}
                    </span>
                  </div>
                </div>

                <div className="text-center">
                  <button
                    type="submit"
                    className="w-2/3 bg-dark-03 text-white uppercase bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-xl px-5 py-2.5 text-center"
                  >
                    Register
                  </button>
                </div>

                <div className="text-center"></div>
              </form>
              <div className="divider">OR</div>
              {/* <Social></Social> */}
              <Social></Social>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
