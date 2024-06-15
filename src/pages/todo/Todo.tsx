import { Fragment } from "react/jsx-runtime";

const Todo = () => {
  return (
    <Fragment>
      {/* container */}
      <div className="w-full justify-center d-flex mt-52">
        {/* Box */}
        <div>
          {/* box Title */}
          <h2 className="text-secondary text-center font-mono text-6xl font-bold mb-8">
            Todo✍️
          </h2>
          <div className="bg-base-300 w-[50%] rounded-lg m-auto border-accent border ">
            {/* search & filter */}
            <div className="w-full border-b p-5 border-accent flex justify-between">
              <label className="input input-bordered flex items-center gap-2">
                <input type="text" className="grow" placeholder="Search" />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 16 16"
                  fill="currentColor"
                  className="w-4 h-4 opacity-70"
                >
                  <path
                    fillRule="evenodd"
                    d="M9.965 11.026a5 5 0 1 1 1.06-1.06l2.755 2.754a.75.75 0 1 1-1.06 1.06l-2.755-2.754ZM10.5 7a3.5 3.5 0 1 1-7 0 3.5 3.5 0 0 1 7 0Z"
                    clipRule="evenodd"
                  />
                </svg>
              </label>
              <select className="select select-bordered">
                <option disabled selected>
                  Filter
                </option>
                <option>Game of Thrones</option>
                <option>Lost</option>
                <option>Breaking Bad</option>
                <option>Walking Dead</option>
              </select>
            </div>
            {/* content */}
            <div className="p-5">
              {/* item */}
              <div className="w-full">
                <span>title</span>
                <span></span>
                <span></span>
                <span></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Todo;
