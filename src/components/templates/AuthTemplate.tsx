import useAuth from "@/store/useAuth";
import { Fragment, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthTemplate = () => {
  const notPathName = !useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  const isLogin = useAuth((state) => state.auth.isLogin);

  useEffect(() => {
    if (notPathName) navigate("/auth/login");
    if (isLogin) navigate("/");
  }, [notPathName, isLogin]);

  return (
    <Fragment>
      <Outlet />
    </Fragment>
  );
};

export default AuthTemplate;
