import React, { useEffect } from "react";
import { useModalStore } from "../../store/modalStore";
import Button from "../Buttons/Button";
import { ModalHeader } from "./ModalHeader";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { AddCollection } from "../../services/db";

export interface INewCollectionModalProps {}
export const NewCollectionModal = (props: INewCollectionModalProps) => {
  const inputRef = React.useRef<HTMLInputElement>(null);
  const closeModal = useModalStore((state) => state.close);

  useEffect(() => {
    inputRef.current?.focus();
    onkeyup = (e) => {
      if (e.key === "Escape") closeModal();
      if (e.key === "Enter") handleSubmit();
    };
  }, []);

  const handleSubmit = async () => {
    if (inputRef.current?.value) {
      const { error, success } = await AddCollection({
        name: inputRef.current.value,
      });
      if (success) closeModal();
    }
  };

  return (
    <div className="flex flex-col">
      <ModalHeader title="New Collection" />
      <div>
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Collection Name"
          name="name"
          ref={inputRef}
          className="input w-full max-w-xs border -mt-2 mb-4 border-base-300"
        />
      </div>

      <div className="collapse">
        <input type="checkbox" />
        <div className="collapse-title flex flex-col justify-center">
          <div className="text-sm text-center">Add more details</div>
          <div className="flex justify-center border-b min-w-full w-full border-base-300">
            <FontAwesomeIcon
              icon={faPlus}
              className="-mb-[9px] w-[13px] outline outline-white outline-4 bg-primary rounded-full p-0.5 text-white text-xs cursor-pointer"
            />
          </div>
        </div>
        <div className="collapse-content">
          <label className="label">
            <span className="label-text">
              Description <span className="text-gray-400">(optional)</span>
            </span>
          </label>
          <textarea
            className="textarea h-24 textarea-bordered w-full max-w-xs"
            placeholder={`Description`}
          ></textarea>
        </div>
      </div>
      <footer className="flex">
        <Button className="btn btn-primary mr-2">Save</Button>
        <Button onClick={closeModal} className="btn btn-primary">
          Cancel
        </Button>
      </footer>
    </div>
  );
};
