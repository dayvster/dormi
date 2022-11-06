import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useEffect } from "react";
import { AddFolder } from "../../services/db";
import { useModalStore } from "../../store/modalStore";
import Button from "../Buttons/Button";
import { ModalHeader } from "./ModalHeader";

export interface INewFolderModalProps {}
export const NewFolderModal = (props: INewFolderModalProps) => {
  const modalStore = useModalStore((state) => state);
  const inputRef = React.useRef<HTMLInputElement>(null);

  useEffect(() => {
    onkeyup = (e) => {
      if (e.key === "Enter") handleSubmit();
      if (e.key === "Escape") modalStore.close();
    };
    inputRef.current?.focus();
  }, []);

  const handleSubmit = async () => {
    if (inputRef.current?.value) {
    }
  };

  return (
    <div className="flex flex-col">
      <ModalHeader title="New Folder" />

      <div className="flex flex-col">
        <label className="label">
          <span className="label-text">Name</span>
        </label>
        <input
          type="text"
          placeholder="Folder Name"
          name="name"
          ref={inputRef}
          className="input w-full max-w-xs border -mt-2 mb-4 border-base-300"
        />

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
          <Button className="btn btn-primary mr-2" onClick={handleSubmit}>
            Save
          </Button>
          <Button className="btn btn-primary">Cancel</Button>
        </footer>
      </div>
    </div>
  );
};
