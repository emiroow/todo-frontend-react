import { changeLanguage } from "@/utils/helpers/localizing.helper";
import { useFormik } from "formik";
import ReactCountryFlag from "react-country-flag";
import { useTranslation } from "react-i18next";
import { IoLanguage } from "react-icons/io5";

const Navbar = () => {
  const { i18n } = useTranslation();
  const formik = useFormik({
    initialValues: {},
    onSubmit: () => {},
  });
  return (
    <div
      className={`w-full h-[7vh] drop-shadow-2xl shadow-2xl border-b px-5 border-gray-800 flex justify-between items-center self-center`}
    >
      <div>test</div>
      {/* <div className="w-[20%]">
        <FormikTextInput
          formik={formik}
          name="search"
          className="btn-sm border-none transition-all delay-50 duration-50 drop-shadow-none shadow-none  "
          placeholder="جستجو"
          innerIcon={{
            icon: <RiSearchLine className="text-secondary text-xl" />,
            position: "left",
          }}
        />
      </div> */}
      <div className="flex items-center flex-row gap-3">
        {/* change Lang */}
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle">
            <div className="indicator relative">
              <IoLanguage className="text-2xl" />
              <span className=" indicator-item">
                {i18n.language === "fa" ? (
                  <ReactCountryFlag
                    countryCode="IR"
                    svg
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                    title="IR"
                  />
                ) : (
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                    title="US"
                  />
                )}
              </span>
            </div>
          </div>
          <ul
            tabIndex={0}
            role="button"
            className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow"
          >
            <li onClick={() => changeLanguage("en")}>
              <a className="flex justify-between">
                <span>en</span>
                <span>
                  <ReactCountryFlag
                    countryCode="US"
                    svg
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                    title="US"
                  />
                </span>
              </a>
            </li>
            <li
              onClick={() => {
                changeLanguage("fa");
              }}
            >
              <a className="flex justify-between">
                <span>fa</span>
                <span>
                  <ReactCountryFlag
                    countryCode="IR"
                    svg
                    style={{
                      width: "1em",
                      height: "1em",
                    }}
                    title="IR"
                  />
                </span>
              </a>
            </li>
          </ul>
        </div>
        {/* Profile */}
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
    </div>
  );
};

export default Navbar;
