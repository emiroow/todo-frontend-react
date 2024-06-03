import { useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

const AuthTemplate = () => {
  const notPathName = !useLocation().pathname.split("/")[2];
  const navigate = useNavigate();
  useEffect(() => {
    if (notPathName) navigate("/auth/login");
  }, [notPathName]);

  return (
    <div>
      <Outlet />
    </div>
  );
};

export default AuthTemplate;
