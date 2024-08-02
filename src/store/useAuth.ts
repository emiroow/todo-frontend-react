import { User } from "@/interfaces/response/ILogin";
import { create } from "zustand";

type Data = {
  user: User;
  isLogin: boolean;
};

interface Store {
  auth: Data;
  setUser: (data: any) => void;
}

const useAuth = create<Store>((set) => ({
  auth: {
    isLogin: false,
    user: {},
  },
  setUser: (data) =>
    set((state) => ({
      auth: {
        ...state.auth,
        user: data,
      },
    })),
}));

export default useAuth;
