import { BiPlus } from "react-icons/bi";

const AddTodo = () => {
  return (
    <div className="w-[95%] md:w-[60%] lg:w-[50%] 2xl:w-[30%] m-auto flex flex-row justify-between gap-1">
      <label className="input max-sm:input-sm input-secondary input-bordered flex items-center gap-2 w-full">
        Todo
        <input
          type="text"
          className="grow"
          placeholder="write your todo name..."
        />
      </label>
      <button className="btn btn-square max-sm:btn-sm btn-active btn-secondary">
        <BiPlus className="text-2xl text-white p-0" />
      </button>
    </div>
  );
};

export default AddTodo;
