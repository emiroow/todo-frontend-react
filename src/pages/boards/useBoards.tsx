import { IBoardResponse } from "@/interfaces/response/IBoard";
import { apiService } from "@/service/axiosService";
import { validateSchema } from "@/utils/common/joiValidator";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useFormik } from "formik";
import Joi from "joi";
import { useState } from "react";
import { toast } from "react-toastify";

const useBoards = () => {
  const [createBoardModal, setCreateBoardModal] = useState(false);
  const queryClient = useQueryClient();

  const getBoards = async () => {
    const data = await apiService<IBoardResponse>({
      path: "/board/list",
      method: "GET",
    });
    return data;
  };
  const { data: boards, isLoading } = useQuery({
    queryKey: ["GET_BOARDS"],
    queryFn: getBoards,
  });

  const schema = Joi.object({
    backgroundImageUrl: Joi.string().required().messages({
      "any.required": "عکس بکگراند فیلد اجباری می باشد",
      "string.empty": "عکس بکگراند فیلد اجباری می باشد",
    }),
    emoji: Joi.string()
      .pattern(/^\p{Emoji}$/u)
      .required()
      .messages({
        "any.required": "اموجی فیلد اجباری می باشد",
        "string.empty": "اموجی فیلد اجباری می باشد",
        "string.pattern.base": "فقط اموجی میتوانید استفاده کنید",
        // "string.max": "فقط یک اموجی میتوانید وارد کنید",
      }),
    name: Joi.string().required().messages({
      "any.required": "نام بورد فیلد اجباری می باشد",
      "string.empty": "نام بورد فیلد اجباری می باشد",
    }),
    date: Joi.string().required().messages({
      "any.required": "تاریخ فیلد اجباری می باشد",
      "string.empty": "تاریخ فیلد اجباری می باشد",
    }),
    selectBackgroundImageUrl: Joi.allow("").optional().messages({
      "string.base": "آدرس بکگراند باید یک رشته باشد",
    }),
  });

  const createBoardFormik = useFormik<any>({
    validate: (value) => validateSchema(schema, value),
    initialValues: {
      backgroundImageUrl: "",
      date: "",
      emoji: "",
      name: "",
      selectBackgroundImageUrl: "",
    },
    onSubmit: (data) => {
      delete data.selectBackgroundImageUrl;
      createBoardMutation.mutate(data);
    },
  });

  const createBoard = async (body: any) => {
    const { data } = await apiService<any>({
      path: "board/create",
      method: "POST",
      Option: { data: body },
    });
    return data;
  };
  const createBoardMutation = useMutation({
    mutationFn: createBoard,
    onSuccess: (data) => {
      createBoardFormik.resetForm();
      queryClient.fetchQuery({ queryKey: ["GET_BOARDS"] });
      setCreateBoardModal(false);
      if (data.status) {
        toast.success(data.massage);
      }
    },
  });

  const getUploadList = async () => {
    const data = await apiService<any>({
      path: "upload/list",
      method: "GET",
    });
    return data;
  };
  const { data: uploads } = useQuery({
    queryKey: ["GET_UPLOADS", createBoardModal],
    queryFn: getUploadList,
    refetchOnMount: true,
  });

  return {
    boards,
    isLoading,
    createBoardModal,
    setCreateBoardModal,
    createBoardFormik,
    createBoardMutation,
    uploads,
    queryClient,
  };
};

export default useBoards;
