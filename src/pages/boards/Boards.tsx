import Modal from "@/components/common/Modal";
import { useAutoAnimate } from "@formkit/auto-animate/react";
import AddBoard from "./components/AddBoard";
import Board from "./components/Board";
import useBoards from "./useBoards";

const Boards = () => {
  const { boards, createBoardModal, setCreateBoardModal } = useBoards();
  const [parent] = useAutoAnimate();
  return (
    <>
      <div className="gap-3 grid 2xl:grid-cols-5 xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-3 sm:grid-cols-2 flex-wrap transition-all duration-300 delay-700 transform-gpu">
        {boards?.data?.map((item, index) => {
          return <Board key={index} data={item} />;
        })}
        <AddBoard
          onClick={() => {
            setCreateBoardModal(true);
          }}
        />
      </div>
      <Modal
        title="test"
        modalState={createBoardModal}
        modalStateSetter={() => setCreateBoardModal(true)}
        // size="w-2/5"
      >
        <>test</>
      </Modal>
    </>
  );
};

export default Boards;
