import React, { FC } from "react";

interface Props {
  modalState: boolean;
  modalStateSetter: any;
  title: string;
  onClick?: () => void;
  onReject?: () => void;
  onSubmit?: () => void;
  onClose?: () => void;
  children: React.ReactElement;
}
const Modal: FC<Props> = ({
  modalState,
  children,
  title,
  modalStateSetter,
}) => {
  if (modalState) {
    document.body.style.overflow = "hidden";
  } else {
    document.body.style.overflow = "auto";
  }
  return (
    <div>
      dasd
      {modalState && (
        <>
          {/* container */}
          <div className="w-full h-[100vh] overflow-x-hidden overflow-y-auto fixed justify-center items-center content-center inset-0 z-30 outline-none focus:outline-none bg-black/30 top-0 left-0">
            {/* box */}
            <div className="w-[95%] md:w-[60%] lg:w-[50%] 2xl:w-[30%] bg-base-300 border-secondary border-2 rounded-xl z-50 m-auto drop-shadow-2xl shadow-2xl shadow-black p-5">
              {/* title */}
              <h3 className="font-bold text-xl w-full">{title}</h3>
              {/* content */}
              <div className="w-full p-2">{children}</div>
              {/* action btn,s */}
              <div className="w-full">
                <button className="btn btn-secondary btn-sm">close</button>
                <button className="btn btn-success btn-sm">submit</button>
                <button className="btn btn-error btn-sm">cancel</button>
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
