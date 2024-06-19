import React, { FC } from "react";
import { MdClose } from "react-icons/md";

interface Props {
  modalState: boolean;
  modalStateSetter: any;
  title?: string;
  onCancel?: () => void;
  onSubmit?: () => void;
  onCloseButton?: () => void;
  onCloseESC?: () => void;
  children: React.ReactElement;
  contentClass?: string;
}
const Modal: FC<Props> = ({
  modalState,
  children,
  title,
  modalStateSetter,
  contentClass,
  onCloseButton,
  onCloseESC,
  onCancel,
  onSubmit,
}) => {
  if (modalState) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div className="">
      {modalState && (
        <>
          {/* container */}
          <div className="w-full h-[100vh] overflow-x-hidden overflow-y-auto fixed justify-center items-center content-center inset-0 z-30 outline-none focus:outline-none bg-black/40 top-0 left-0">
            {/* box */}
            <div className="w-[95%] md:w-[60%] lg:w-[50%] 2xl:w-[30%] bg-base-300 border-secondary border-2 rounded-xl z-50 m-auto drop-shadow-2xl shadow-2xl shadow-black ">
              {/* head */}
              {title || onCloseESC ? (
                <div
                  className={`p-3 border-secondary flex flex-row  justify-end items-center ${
                    !title === true && !onCloseESC === false
                      ? ""
                      : !title === false && !onCloseESC === true
                      ? ""
                      : "border-b-2"
                  }`}
                >
                  {/* title */}
                  {title && (
                    <h3 className="font-bold text-xl w-full">{title}</h3>
                  )}
                  {/* ESC btn */}
                  {onCloseESC && (
                    <button
                      onClick={() => {
                        modalStateSetter(false);
                        onCloseESC?.();
                      }}
                      className="btn btn-xs btn-circle btn-outline btn-error"
                    >
                      <MdClose />
                    </button>
                  )}
                </div>
              ) : null}

              {/* content */}
              <div className={`w-full p-2 ${contentClass}`}>{children}</div>
              {/* action btn,s */}
              <div className="w-full flex justify-end gap-3 p-5">
                {onSubmit && (
                  <button onClick={onSubmit} className="btn btn-success btn-sm">
                    Submit
                  </button>
                )}
                {onCancel && (
                  <button onClick={onCancel} className="btn btn-error btn-sm">
                    Cancel
                  </button>
                )}
                {onCloseButton && (
                  <button
                    onClick={() => {
                      modalStateSetter(false);
                      onCloseButton();
                    }}
                    className="btn btn-secondary btn-sm"
                  >
                    Close
                  </button>
                )}
              </div>
            </div>
            {/* back Drop */}
            <div
              onClick={() => modalStateSetter(false)}
              className=" w-full h-full fixed top-0 -z-40"
            ></div>
          </div>
        </>
      )}
    </div>
  );
};

export default Modal;
