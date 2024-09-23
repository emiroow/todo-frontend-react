import FormikDatePickerInput from "@/components/common/FormikDatePickerInput";
import FormikError from "@/components/common/FormikError";
import FormikTextInput from "@/components/common/FormikTextInput";
import Modal from "@/components/common/Modal";
import { apiService } from "@/service/axiosService";
import { useState } from "react";
import { MdClose } from "react-icons/md";
import { RiImageAddLine } from "react-icons/ri";
import "react-multi-date-picker/styles/layouts/mobile.css";
import { toast } from "react-toastify";
import AddBoard from "./components/AddBoard";
import Board from "./components/Board";
import BoardSkeleton from "./components/BoardSkeleton";
import useBoards from "./useBoards";

const Boards = () => {
  const {
    boards,
    createBoardModal,
    setCreateBoardModal,
    isLoading,
    createBoardFormik,
    createBoardMutation,
  } = useBoards();

  const [uploadLoader, setLoader] = useState(false);
  return (
    <>
      <div className="gap-3 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 flex-wrap transition-all duration-300 delay-700 transform-gpu">
        {isLoading ? (
          <BoardSkeleton />
        ) : (
          boards?.data?.map((item, index) => {
            return <Board key={index} data={item} />;
          })
        )}
        <AddBoard
          onClick={() => {
            setCreateBoardModal(true);
          }}
        />
      </div>

      <Modal
        title="ایجاد بورد جدید"
        modalState={createBoardModal}
        modalStateSetter={setCreateBoardModal}
        onCloseESC={() => setCreateBoardModal(false)}
        onSubmit={() => createBoardFormik.handleSubmit()}
        onCancel={() => createBoardFormik.resetForm()}
        onCloseButton={() => setCreateBoardModal(false)}
        submitLoading={createBoardMutation.isPending}
      >
        <div className="p-3 grid gap-3 2xl:grid-cols-3 xl:grid-cols-3 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
          <FormikTextInput formik={createBoardFormik} name="name" label="نام" />
          <FormikTextInput
            formik={createBoardFormik}
            name="emoji"
            label="اموجی"
          />
          <FormikDatePickerInput
            formik={createBoardFormik}
            name="date"
            label="تاریخ"
            required
          />
          <div className="sm:col-span-3">
            <div className=" border-secondary border rounded-lg relative">
              <label htmlFor="file" className=" text-center  w-full h-max p-0">
                <div className="w-full flex justify-center p-3 gap-3 items-center hover:text-secondary cursor-pointer">
                  <span>آپلود عکس</span>
                  <RiImageAddLine className="text-xl" />
                </div>
                {uploadLoader && (
                  <div className="w-full p-5">
                    <span className="loading loading-ring loading-lg"></span>
                  </div>
                )}
                {createBoardFormik.values.backgroundImageUrl && (
                  <div className="w-full bg-red-500 rounded-lg relative h-[35vh] ">
                    <div
                      className="absolute inset-0 bg-cover bg-center transition-transform duration-300 transform group-hover:scale-125 rounded-b-lg"
                      style={{
                        backgroundImage: `url(${createBoardFormik.values.backgroundImageUrl})`,
                      }}
                    ></div>
                  </div>
                )}
              </label>

              {createBoardFormik.values.backgroundImageUrl && (
                <button
                  onClick={() => {
                    createBoardFormik.setFieldValue("backgroundImageUrl", "");
                  }}
                  className="btn btn-xs btn-circle btn-error absolute top-14 left-3 z-50"
                >
                  <MdClose />
                </button>
              )}
              <input
                onChange={async (event) => {
                  console.log(createBoardFormik.values);
                  if (event.target.files && event.target.files[0]) {
                    const img = event.target.files[0];
                    const fd = new FormData();
                    fd.append("name", img.name);
                    fd.append("image", img);
                    setLoader(true);
                    try {
                      const uploadImage = await apiService<{
                        name: string;
                        url: string;
                        fullUrl: string;
                      }>({
                        method: "POST",
                        path: "/upload/create",
                        Option: {
                          data: fd,
                          headers: {
                            "Content-Type": "multipart/form-data",
                          },
                        },
                      });
                      const fullUrl = `${import.meta.env.VITE_FILE_BASE_URL}${
                        uploadImage.data?.url
                      }`;
                      if (uploadImage.status) {
                        createBoardFormik.setFieldValue(
                          "backgroundImageUrl",
                          fullUrl
                        );
                      } else {
                        toast.error(uploadImage.massage);
                      }
                    } catch (error) {
                      toast.error("خطا در آپلود عکس");
                    }
                    setLoader(false);
                  }
                }}
                type="file"
                id="file"
                dir="ltr"
                className="col-span-3 file-input file-input-bordered file-input-secondary hidden"
              />
            </div>
            <FormikError name="backgroundImageUrl" formik={createBoardFormik} />
          </div>
        </div>
      </Modal>
    </>
  );
};

export default Boards;
