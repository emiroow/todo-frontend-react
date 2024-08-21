import useAuth from "@/store/useAuth";
import useSetting from "@/store/useSetting";
import { IoLogOutOutline } from "react-icons/io5";
import { MdHistory } from "react-icons/md";
import { RiMenu3Fill } from "react-icons/ri";

const SideMenu = () => {
  const { setAsideMenuStatus, settings } = useSetting();
  const { logOut } = useAuth();
  const { sideMenuIsOpen } = settings;

  return (
    <div
      className={`${
        sideMenuIsOpen
          ? "2xl:w-[20%] xl:w-[25%] lg:w-[27%] max-lg:hidden"
          : "w-[4%]"
      } h-[100vh] border-e border-gray-800 drop-shadow-2xl shadow-2xl transition-all duration-500 `}
    >
      <div className="w-full flex h-[7vh] relative">
        {sideMenuIsOpen && (
          <span className="w-[100%] h-[7vh] text-center flex justify-center items-center text-3xl">
            Logo
          </span>
        )}

        <span className="absolute left-3 top-3 text-center flex justify-center items-center">
          <button
            onClick={() => setAsideMenuStatus(!sideMenuIsOpen)}
            className="btn-ghost btn btn-circle"
          >
            <RiMenu3Fill className="text-white text-2xl" />
          </button>
        </span>
      </div>

      {/* Fade Wrapper */}
      <div
        className={`transition-opacity duration-300 ${
          sideMenuIsOpen ? "opacity-100" : "opacity-0"
        } ${sideMenuIsOpen ? "block" : "hidden"}`}
      >
        <ul className="w-full menu menu-lg rounded-box mt-4 h-[85vh] ">
          <li>
            <details open>
              <summary>
                <MdHistory className="text-2xl" />
                <span>تست</span>
              </summary>
              <ul>
                <li>
                  <a>Submenu 1</a>
                </li>
                <li>
                  <a>Submenu 2</a>
                </li>
              </ul>
            </details>
          </li>
          <li>
            <span>
              <MdHistory className="text-2xl" />
              <span>تست</span>
            </span>
          </li>
        </ul>
        {sideMenuIsOpen && (
          <div className="w-full h-[6vh] px-2 items-center ">
            <div
              onClick={() => logOut()}
              className="w-max flex gap-2  p-3 rounded-lg items-center transition duration-150 cursor-pointer"
            >
              <IoLogOutOutline className="text-3xl" />
              <span className="text-secondary">خروج</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default SideMenu;
