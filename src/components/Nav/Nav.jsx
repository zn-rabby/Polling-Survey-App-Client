import { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { AuthContext } from "../../provider/AuthProvider";

const Nav = () => {
  const { user, logOut } = useContext(AuthContext);
  const handleSignOut = () => {
    logOut()
      .then((result) => {
        console.log(result.user);
      })
      .catch((error) => console.error(error));
  };
  const navLinks = (
    <>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
        <NavLink
          to="/"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-dark-03 " : ""
          }
        >
          Home
        </NavLink>
      </li>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
        <NavLink
          to="/surveys"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-dark-03 " : ""
          }
        >
          Surveys
        </NavLink>
      </li>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
        <NavLink
          to="/about"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-dark-03 " : ""
          }
        >
          About Us
        </NavLink>
      </li>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
        <NavLink
          to="/contract"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-dark-03 " : ""
          }
        >
          Contract
        </NavLink>
      </li>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
        <NavLink
          to="/dashboard"
          className={({ isActive, isPending }) =>
            isPending ? "pending " : isActive ? "text-dark-03 " : ""
          }
        >
          Dashboard
        </NavLink>
      </li>
      <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline flex items-center justify-center">
        {user ? (
          <>
            <Link
              onClick={handleSignOut}
              className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline"
            >
              Logout
            </Link>
          </>
        ) : (
          <>
            <li className="mx-2 text-dark-01 text-lg font-medium hover:text-dark-03 hover:underline">
              <Link to="/login">Login</Link>
            </li>
          </>
        )}
      </li>
    </>
  );
  return (
    <div className="shadow">
      <div className="navbar max-w-7xl mx-auto">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="inline-block w-8 h-8 stroke-current "
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="3"
                  d="M4 6h16M4 12h16M4 18h16"
                ></path>
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content  mt-3 z-[1] p-3 shadow bg-base-100 rounded-box w-52"
            >
              {navLinks}
            </ul>
          </div>
          <a className=" flex gap-4 items-center font-bold text-2xl">
            <img
              className="w-12 h-12"
              src="https://i.ibb.co/MVcB4SC/ddss-removebg-preview-1.png"
              alt=""
            />
            <p className="text-3xl -ms-6 text-dark-03 font-bold ">OpineLink</p>
          </a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">{navLinks}</ul>
        </div>
        <div></div>
        <div className="navbar-end ">
          {user ? (
            <div className="dropdown dropdown-end">
              <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                <div className="w-14 rounded-full border-2 border-dark-03">
                  <img src={user.photoURL} />
                </div>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-72"
              >
                <li>
                  <a className="justify-between font-semibold text-dark-03">
                    {user.displayName}
                  </a>
                </li>
                <li>
                  <a className="justify-between text-dark-03">{user.email}</a>
                </li>
                <li>
                  <button
                    onClick={handleSignOut}
                    className="text-dark-03 hover:bg-border-dark-03 hover:text-[white] font-semibold px-3 py-1 rounded text-base border border-border-dark-03 "
                  >
                    Log Out
                  </button>
                </li>
              </ul>
            </div>
          ) : (
            <Link to="/login">
              {" "}
              <button className="text-dark-03 hover:bg-border-dark-03 hover:text-[white] font-semibold px-4 py-2 rounded text-lg border border-border-dark-03 dark:border-white">
                Log In
              </button>{" "}
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Nav;
