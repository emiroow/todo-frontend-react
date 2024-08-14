import FormikTextInput from "@/components/common/FormikTextInput";
import { useFormik } from "formik";
import { RiSearchLine } from "react-icons/ri";

const Navbar = () => {
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });

  return (
    <div
      className={`w-full h-[7vh] drop-shadow-2xl shadow-2xl border-b px-5 border-gray-800 flex justify-between items-center self-center`}
    >
      <div>test</div>
      <div className="w-[20%]">
        <FormikTextInput
          formik={formik}
          name="search"
          className="btn-sm border-none transition-all delay-50 duration-50 drop-shadow-none shadow-none"
          placeholder="جستجو"
          innerIcon={{
            icon: <RiSearchLine className="text-secondary text-xl" />,
            position: "left",
          }}
        />
      </div>
      <div className="dropdown dropdown-end">
        <div
          tabIndex={0}
          role="button"
          className="btn btn-ghost btn-circle avatar"
        >
          <div className="w-10 rounded-full">
            <img
              alt="Tailwind CSS Navbar component"
              src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"
            />
          </div>
        </div>
        <ul
          tabIndex={0}
          className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow "
        >
          <li>
            <a>تست</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
