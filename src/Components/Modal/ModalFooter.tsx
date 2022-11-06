import React from "react";
import { useModalStore } from "../../store/modalStore";
import Button from "../Buttons/Button";
export const ModalFooter = () => {
  const closeModal = useModalStore((state) => state.close);
  return (
    <footer className="flex items-center w-full border-t border-base-300">
      <Button onClick={closeModal}>Cancel</Button>
    </footer>
  );
};
export default ModalFooter;
