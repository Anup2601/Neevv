import { Outlet } from "react-router-dom";
import Sidebar from "../../components/educator/Sidebar";

const Educator = () => {
  return (
    <div className="text-default ">
      <div className="flex">
        <Sidebar />
        <div className="flex-1">
          <Outlet />
        </div>
      </div>
    </div>
  );
};

export default Educator;
