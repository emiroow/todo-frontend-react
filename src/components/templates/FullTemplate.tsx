import useAuth from "@/store/useAuth";
import { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

const FullTemplate = () => {
  const isLogin = useAuth((state) => state.auth.isLogin);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLogin) navigate("/auth/login");
  }, [isLogin]);

  return (
    <div className="drawer">
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default FullTemplate;
