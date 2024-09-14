const BoardSkeleton = () => {
  return (
    <div className=" skeleton max-sm:w-[100%] relative rounded-xl p-3 bg-center bg-no-repeat overflow-hidden drop-shadow-lg shadow-black/50 shadow-lg hover:cursor-progress group">
      <div className="relative z-10 flex flex-col gap-3 ">
        <div className="w-full flex flex-row items-center gap-3">
          <div className="w-12 h-12 drop-shadow-2xl p-3 glass rounded-xl flex justify-center items-center self-center skeleton">
            <span className="text-xl"></span>
          </div>
          <span className="font-sansRegular text-white text-xl skeleton w-24 bg-base-100 rounded-s-lg h-5"></span>
        </div>
        <div className="font-sansRegular text-white text-xl skeleton w-full bg-base-100 rounded-s-lg h-5 float-left"></div>
        <div className="w-full text-left">
          <div className="font-sansRegular text-white text-xl skeleton w-24 bg-base-100 rounded-s-lg h-5 float-left"></div>
        </div>
      </div>
    </div>
  );
};

export default BoardSkeleton;
