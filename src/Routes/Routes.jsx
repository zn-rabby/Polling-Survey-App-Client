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
    element: <Dashboard></Dashboard>,
    children: [
      {
        path: "users",
        element: <AllUsers></AllUsers>,
      },
      {
        path: "createSurvey",
        element: <SurveyCreate></SurveyCreate>,
      },
    ],
  },
]);
