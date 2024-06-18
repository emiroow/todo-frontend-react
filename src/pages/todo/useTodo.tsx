import { useState } from "react";

const useTodo = () => {
  const [testModal, setTestModal] = useState(false);
  return { testModal, setTestModal };
};

export default useTodo;
