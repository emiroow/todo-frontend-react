import { useTranslation } from "react-i18next";
import { BiSolidEditAlt } from "react-icons/bi";

const Board = () => {
  const { t } = useTranslation();
  return (
    <div className="w-full">
      {/* Board Name */}
      <div className="w-full p-4 flex gap-3 items-center">
        <span className="w-8 h-8 text-center items-center self-center justify-center flex rounded-full bg-secondary/30 drop-shadow-xl shadow-xl ">
          ❤️
        </span>
        <span className="text-2xl text-secondary font-sansBold">احبر</span>
        <button className="btn btn-ghost btn-sm btn-circle">
          <BiSolidEditAlt className="text-2xl text-success" />
        </button>
      </div>
      {/* search and Filter Inputs */}
      <div className="w-full">{t("hi")}</div>
      {/* tasks */}
      <div className="w-full"></div>
    </div>
  );
};

export default Board;
