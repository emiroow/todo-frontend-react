import { create } from "zustand";

interface BearState {
  todo: any;
  addTodo: any;
}

const useTodo = create<BearState>()((set) => ({
  todo: [],
  addTodo: () =>
    set((state) => ({ todo: [...state.todo, { emiroow: "test" }] })),
}));
export default useTodo;
