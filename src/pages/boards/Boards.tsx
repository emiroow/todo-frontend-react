import FormikDatePickerInput from "@/components/common/FormikDatePickerInput";
import FormikTextInput from "@/components/common/FormikTextInput";
import Modal from "@/components/common/Modal";
import "react-multi-date-picker/styles/layouts/mobile.css";
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
  } = useBoards();
  console.log(createBoardFormik.values);
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
        // size="w-2/5"
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
        </div>
      </Modal>
    </>
  );
};

export default Boards;
