import React from "react";
import { useModalStore } from "../../store/modalStore";
import Button from "../Buttons/Button";

export const Modal = () => {
  const modalStore = useModalStore((state) => state);
  const isOpen = modalStore.isOpen;
  const backdropStyles = "bg-opacity-50 backdrop-blur-[2px] bg-gray-200";
  if (!isOpen) return <></>;
  return (
    <div
      className={`flex flex-col w-full h-full absolute justify-center items-center`}
    >
      <div
        className={`${backdropStyles} w-full h-full absolute`}
        onClick={modalStore.close}
      ></div>
      <div className="rounded-lg card shadow-lg bg-base-100 p-2 min-w-[320px] border border-gray-300">
        <div className="content">{modalStore.content}</div>
        <footer>
          <Button
            onClick={() => {
              modalStore.close();
            }}
          >
            Close
          </Button>
        </footer>
      </div>
    </div>
  );
};
export default Modal;
