import { NavLink, Outlet } from "react-router-dom";
import { IoCreate } from "react-icons/io5";
import { GrUpdate } from "react-icons/gr";
import {
  FaAd,
  FaBacon,
  // FaCalendar,
  // FaCartPlus,
  FaEnvelope,
  FaHome,
  FaList,
  FaUsers,
  FaUtensils,
} from "react-icons/fa";
import { BiBuildingHouse } from "react-icons/bi";
import useAdmin from "../hooks/useAdmin";

const Dashboard = () => {
  // TODO get admin value from the database
  const isAdmin = useAdmin();
  // const isSurveyor = false;

  return (
    <div className="flex">
      {/* dashboard side bar */}
      <div className="w-64 min-h-screen bg-dark-01 text-white">
        <ul className="ms-3 me-2 mt-5">
          {isAdmin && (
            <>
              <h2 className="text-lg font-medium bg-dark-03 rounded py-2 px-4 my-2 text-center uppercase">
                Admin Dashboard
              </h2>
              <li>
                <NavLink
                  to="/dashboard/adminHome"
                  className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                >
                  <FaHome></FaHome> Admin Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/addItems"
                  className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                >
                  <FaUtensils></FaUtensils>
                  Add Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/manageItems"
                  className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                >
                  <FaList></FaList> Manage Items
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/booking"
                  className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                >
                  <FaAd></FaAd> Manage Booking
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="/dashboard/users"
                  className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                >
                  <FaUsers></FaUsers> Manage Users
                </NavLink>
              </li>
            </>
          )}
          {/* {isSurveyor && (
            <>
              <>
                <h2 className="text-lg font-medium bg-dark-03 rounded py-2 px-4 text-center uppercase">
                  Surveyor Dashboard
                </h2>
                <li>
                  <NavLink
                    to="/dashboard/userHome"
                    className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                  >
                    <FaHome></FaHome> Surveyor Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/createSurvey"
                    className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                  >
                    <IoCreate /> Survey Create
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/dashboard/reservation"
                    className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
                  >
                    <GrUpdate /> Survey Update
                  </NavLink>
                </li>
              </>
            </>
          )} */}

          <h2 className="text-lg font-medium bg-dark-03 rounded py-2 px-4 my-2 text-center uppercase">
            User Dashboard
          </h2>
          <li>
            <NavLink
              to="/"
              className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
            >
              <FaHome></FaHome> Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/surveys"
              className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
            >
              <FaBacon></FaBacon> Surveys
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
            >
              <BiBuildingHouse></BiBuildingHouse> About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contract"
              className="flex gap-1 px-3 py-2 items-center font-semibold hover:border-b hover:border-dark-02"
            >
              <FaEnvelope></FaEnvelope> Contract
            </NavLink>
          </li>
        </ul>
      </div>
      {/* dashboard content */}
      <div className="flex-1 bg-slate-50">
        <Outlet></Outlet>
      </div>
    </div>
  );
};

export default Dashboard;
