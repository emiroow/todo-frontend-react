import { BiShow, BiSolidEdit, BiTrash } from "react-icons/bi";

const TodoItem = () => {
  return (
    <div className="w-full border p-5 rounded flex flex-row item-center justify-between">
      <div className="flex flex-row self-center item-center gap-3">
        {/* todo check */}
        <input
          type="checkbox"
          className="checkbox checkbox-sm mt-1 checkbox-secondary"
        />
        {/* todo title */}
        <span className=" font-light">ye text chert</span>
      </div>
      <div className="flex flex-row item-center gap-3">
        {/* time */}
        <span className="text-secondary font-medium">08:35</span>
        {/* action btn s */}
        <div className="flex gap-2 item-center">
          <button>
            <BiShow className="text-xl text-gray-300 hover:text-secondary" />
          </button>
          <button>
            <BiSolidEdit className="text-xl text-gray-300 hover:text-success" />
          </button>
          <button>
            <BiTrash className="text-xl text-gray-300 hover:text-error" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default TodoItem;
