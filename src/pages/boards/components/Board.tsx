import { IBoard } from "@/interfaces/response/IBoard";
import * as moment from "jalali-moment";
import { FC } from "react";
import { useNavigate } from "react-router-dom";
const Board: FC<{ data: IBoard }> = ({ data }) => {
  const navigate = useNavigate();
  return (
    <div
      onClick={() => navigate(`/board/${data._id}`)}
      className={`h-max max-sm:w-[100%] 
      relative rounded-xl p-3 bg-center bg-no-repeat overflow-hidden drop-shadow-lg shadow-black/50 shadow-lg hover:cursor-pointer group`}
    >
      <div className="relative z-10 flex flex-col gap-3 ">
        <div className="w-full flex flex-row items-center gap-3">
          <div className="w-max drop-shadow-2xl p-3 glass rounded-xl flex justify-center items-center self-center">
            <span className="text-xl">{data.emoji}</span>
          </div>
          <span className="font-sansRegular text-white text-xl">
            {data.name}
          </span>
        </div>
        <div className="w-full">
          <span className="flex justify-between">
            <span>تعداد تارگت ها</span>
            <span>0</span>
          </span>
        </div>
        <div className="w-full text-left">
          <span className="font-sansLight text-sm">
            {moment
              .from(data.date, "YYYY/MM/DD")
              .locale("fa")
              .format("YYYY/MM/DD")}
          </span>
        </div>
      </div>
      <div
        className="absolute inset-0 bg-cover bg-center brightness-50 transition-transform duration-300 transform group-hover:scale-125"
        style={{
          backgroundImage: `url(${data.backgroundImageUrl})`,
        }}
      ></div>
    </div>
  );
};

export default Board;
