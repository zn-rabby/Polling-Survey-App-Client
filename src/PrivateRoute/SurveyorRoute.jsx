import { Navigate, useLocation } from "react-router-dom";
import useSurveyor from "../hooks/useSurveyor";
import useAuth from "../hooks/useAuth";

const SurveyorRoute = ({ children }) => {
  const { user, loading } = useAuth();
  const [isSurveyor, isAdminLoading] = useSurveyor();
  const location = useLocation();

  if (loading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  if (user && isSurveyor) {
    return children;
  }

  return <Navigate to="/" state={{ from: location }} replace></Navigate>;
};

export default SurveyorRoute;
