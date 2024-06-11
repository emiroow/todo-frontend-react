import { Outlet } from "react-router-dom";

const FullTemplate = () => {
  // useEffect(() => {}, []);
  return (
    <div>
      <Outlet />
    </div>
  );
};

export default FullTemplate;
