import { ITargetResponse } from "@/interfaces/response/ITarget";
import { apiService } from "@/service/axiosService";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "react-router-dom";

const useBoard = () => {
  const { id } = useParams();

  const getTargets = async () => {
    const data = await apiService<ITargetResponse[]>({
      method: "GET",
      path: "target/list",
      Option: { params: { board: id } },
    });
    return data;
  };
  const { data: targets, isLoading: targetsIsLoading } = useQuery({
    queryKey: ["GET_TARGETS"],
    enabled: !!id,
    queryFn: getTargets,
  });

  return { targets, targetsIsLoading };
};

export default useBoard;
