import { IBoard } from "@/interfaces/response/IBoard";
import { apiService } from "@/service/axiosService";
import { useQuery } from "@tanstack/react-query";
import { useState } from "react";

const useBoards = () => {
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const getBoards = async () => {
    const data = await apiService<IBoard[]>({
      path: "/board/list",
      method: "GET",
    });
    return data;
  };
  const { data: boards, isLoading } = useQuery({
    queryKey: ["GET_BOARDS"],
    queryFn: getBoards,
  });
  return { boards, isLoading, createBoardModal, setCreateBoardModal };
};

export default useBoards;
