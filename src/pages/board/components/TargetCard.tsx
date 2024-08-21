import { BsThreeDotsVertical } from "react-icons/bs";

const TargetCard = () => {
  return (
    <div className="2xl:min-w-[20%] h-max xl:min-w-[30%] lg:min-w-[30%] md:min-w-[35%] sm:min-w-[40%] min-w-[70%]">
      <div className="flex justify-between ps-4 mb-1 items-center">
        <span className="font-sansBold">عنوان</span>
        <button className="btn btn-ghost btn-sm btn-square text-primary">
          <BsThreeDotsVertical className="text-lg" />
        </button>
      </div>
      <div className="cursor-pointer rounded-lg bg-neutral p-3 shadow-lg drop-shadow-2xl shadow-primary/15 border border-primary/5 transition-all delay-100 duration-700 hover:shadow-primary/50">
        TargetCard
      </div>
    </div>
  );
};

export default TargetCard;
