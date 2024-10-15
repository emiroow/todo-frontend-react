import { BiSolidEditAlt } from "react-icons/bi";
import TargetCard from "./components/TargetCard";
import useBoard from "./useBoard";

const Board = () => {
  const { targets } = useBoard();

  return (
    <div className="w-full">
      {/* Board Name */}
      <div className="w-full py-5 flex gap-3 items-center">
        <span className="w-10 h-10 text-center items-center self-center justify-center flex rounded-full bg-secondary/30 drop-shadow-xl shadow-xl glass ">
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
      <div className="w-full px-2 flex gap-3 mt-1 pb-5 h-max overflow-x-auto scroll-smooth">
        {targets?.data?.map((item, index: number) => {
          return <TargetCard data={item} key={index} />;
        })}
      </div>
    </div>
  );
};

export default Board;
