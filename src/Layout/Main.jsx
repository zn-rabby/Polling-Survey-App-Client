import { Outlet } from "react-router-dom";
import Footer from "../components/Footer/Footer";
import Nav from "../components/Nav/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
