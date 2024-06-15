import { Outlet } from "react-router-dom";
import Navbar from "./components/Navbar";

const FullTemplate = () => {
  // useEffect(() => {}, []);
  return (
    <div className="drawer">
      <div className="drawer-content flex flex-col">
        <Navbar />
        <Outlet />
        {/* <Footer /> */}
      </div>
    </div>
  );
};

export default FullTemplate;
