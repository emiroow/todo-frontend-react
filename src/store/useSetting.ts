import {
  getHashedLocalStorage,
  setHashedLocalStorage,
} from "@/utils/helpers/hash.helper";
import { create } from "zustand";

type Data = {
  sideMenuIsOpen: boolean;
};

interface Store {
  settings: Data;
  setAsideMenuStatus: (data: boolean) => void;
}

const localStorageSetting = getHashedLocalStorage<Data>("TodoSettings");
const useSetting = create<Store>((set) => ({
  settings: {
    sideMenuIsOpen: localStorageSetting.sideMenuIsOpen ?? true,
  },
  setAsideMenuStatus: (data) => {
    set((state) => {
      const ObjState = {
        settings: { ...state.settings, sideMenuIsOpen: data },
      };
      setHashedLocalStorage("TodoSettings", ObjState.settings);
      return ObjState;
    });
  },
}));

export default useSetting;
