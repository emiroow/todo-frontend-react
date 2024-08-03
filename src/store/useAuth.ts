import { ILoginResponse, User } from "@/interfaces/response/ILogin";
import { getHashedLocalStorage } from "@/utils/helpers/hash.helper";
import { create } from "zustand";

type Data = {
  user: User;
  isLogin: boolean;
};

interface Store {
  auth: Data;
  setUser: (data: any) => void;
  setLoginStatus: (data: boolean) => void;
  logOut: () => void;
}

const useAuth = create<Store>((set) => ({
  auth: {
    isLogin: !!getHashedLocalStorage<ILoginResponse>("TodoApp").token,
    user: {},
  },
  setUser: (data) =>
    set((state) => ({
      auth: {
        ...state.auth,
        user: data,
      },
    })),
  setLoginStatus: (data) =>
    set((state) => ({
      auth: {
        ...state.auth,
        isLogin: data,
      },
    })),
  logOut: () => {
    set(() => ({ auth: { isLogin: false, user: {} } }));
    localStorage.removeItem("TodoApp");
  },
}));

export default useAuth;
