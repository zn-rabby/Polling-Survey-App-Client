import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Page/Home/Home/Home";
import Login from "../Page/Login/Login";
import Register from "../Page/Register/Register";
import Dashboard from "../Layout/Dashboard";
import Surveys from "../Page/Surveys/Surveys";
import About from "../components/About/About";
import AllUsers from "../Page/Dasheboard/AllUsers/AllUsers";
import SurveyCreate from "../Page/Surveyor/SurveyCreate/SurveyCreate";
import Contract from "../components/Contract/Contract";
import Payment from "../Page/Payment/Payment";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ManageSurvey from "../Page/Surveyor/ManageSurvey/ManageSurvey";
import SurveyUpdate from "../Page/Surveyor/ManageSurvey/SurveyUpdate";
import SurveyDetails from "../Page/Surveys/SurveyDetails";
import AdminHome from "../Page/Dasheboard/AdminHome/AdminHome";
import AdminRoute from "../PrivateRoute/AdminRoute";
import Users from "../Page/Dasheboard/Users/Users";
import PaymentList from "../Page/Dasheboard/PaymenList/PaymentList";
import StartSurvey from "../Page/Surveys/StartSurvey";
import SurveyorHome from "../Page/Surveyor/SurveryorHome/SurveryorHome";
import Report from "../Page/Surveyor/Report/Report";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/surveys",
        element: <Surveys></Surveys>,
      },
      {
        path: "/startSurvey/:id",
        element: <StartSurvey></StartSurvey>,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/api/v1/update-survey/${params.id}`),
      },
      {
        path: "/surveys/update/:id",
        element: <SurveyDetails></SurveyDetails>,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/api/v1/update-survey/${params.id}`),
      },
      {
        path: "/payment",
        element: <Payment></Payment>,
      },
      {
        path: "/contract",
        element: <Contract></Contract>,
      },
      {
        path: "/about",
        element: <About></About>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
    ],
  },
  {
    path: "dashboard",
    element: (
      <PrivateRoute>
        <Dashboard></Dashboard>
      </PrivateRoute>
    ),
    children: [
      {
        path: "adminHome",
        element: <AdminHome></AdminHome>,
      },
      {
        path: "paymentList",
        element: <PaymentList></PaymentList>,
      },
      {
        path: "usersAll",
        element: (
          <AdminRoute>
            <AllUsers></AllUsers>
          </AdminRoute>
        ),
      },
      {
        path: "createSurvey",
        element: <SurveyCreate></SurveyCreate>,
      },
      {
        path: "surveyorHome",
        element: <SurveyorHome></SurveyorHome>,
      },
      {
        path: "surveyorReport",
        element: <Report></Report>,
      },
      {
        path: "manageSurvey",
        element: <ManageSurvey></ManageSurvey>,
      },
      {
        path: "manageSurvey/surveyUpdate/:id",
        element: <SurveyUpdate></SurveyUpdate>,
        loader: ({ params }) =>
          fetch(`http://localhost:5002/api/v1/update-survey/${params.id}`),
      },
    ],
  },
]);
