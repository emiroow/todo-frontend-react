const TodoInfoBox = () => {
  return (
    <div className=" w-[95%] md:w-[60%] lg:w-[50%] 2xl:w-[30%] m-auto flex flex-row border rounded sm:p-8 p-5 py-8 justify-between items-center">
      {/* text */}
      <div className="flex flex-col gap-1">
        <span className="font-bold sm:text-4xl text-2xl text-white">
          Todo Done !
        </span>
        <span className="sm:text-2xl text-xl text-secondary">keep it up .</span>
      </div>
      {/* data circle */}
      <div className=" bg-secondary flex justify-center self-center items-center text-center sm:w-48 sm:h-48 w-40 h-40 text-white relative rounded-full drop-shadow-2xl shadow-2xl shadow-black">
        <span className="text-4xl">
          <span className="font-medium">1</span>
          <span> / </span>
          <span className="font-medium">3</span>
        </span>
      </div>
    </div>
  );
};

export default TodoInfoBox;
