import { BiSolidEditAlt } from "react-icons/bi";
import TargetCard from "./components/TargetCard";

const Board = () => {
  return (
    <div className="w-full">
      {/* Board Name */}
      <div className="w-full py-5 flex gap-3 items-center">
        <span className="w-8 h-8 text-center items-center self-center justify-center flex rounded-full bg-secondary/30 drop-shadow-xl shadow-xl ">
          ❤️
        </span>
        <span className="text-2xl text-secondary font-sansBold">احبر</span>
        <button className="btn btn-ghost btn-sm btn-circle">
          <BiSolidEditAlt className="text-2xl text-success" />
        </button>
      </div>
      {/* search and Filter Inputs */}
      <div className="w-full"></div>
      {/* Targets */}
      <div className="w-full flex gap-4 mt-1 pb-5 h-max overflow-x-auto ">
        <TargetCard />
        <TargetCard />
        <TargetCard />
        <TargetCard />
        <TargetCard />
        <TargetCard />
        <TargetCard />
      </div>
    </div>
  );
};

export default Board;
