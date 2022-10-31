import React from "react";
import { useModalStore } from "../../store/modalStore";
import Button from "../Buttons/Button";
import Searchbar from "../Searchbar/Searchbar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faPlus,
  faEllipsisV,
  faFileExport,
} from "@fortawesome/free-solid-svg-icons";
import { faTrashCan, faPenToSquare } from "@fortawesome/free-regular-svg-icons";
import { NewCollectionModal } from "../Modal/NewCollectionModal";

export interface ILeftMenuProps {}
export const LeftMenu = (props: React.PropsWithChildren<ILeftMenuProps>) => {
  const modalStore = useModalStore((state) => state);
  return (
    <div className="left-menu flex flex-col w-leftmenu min-h-full border-r border-gray-300 shadow-xl">
      <header className="w-full border-b flex flex-col">
        <Searchbar />
        <div className="collection-actions flex m-2">
          <div className="collection-name">
            <span className="text-sm uppercase">{"Collection"}</span>
          </div>
          <div className="controls flex ml-auto items-center">
            <Button
              className="text-white w-[18px] bg-gray-800 h-[18px] text-[13px] btn-circle flex items-center justify-center mx-2"
              onClick={() => modalStore.open(<NewCollectionModal />)}
              type="icon"
              icon={<FontAwesomeIcon icon={faPlus} />}
            />

            <div className="dropdown dropdown-end cursor-pointer">
              <span
                tabIndex={0}
                className="h-full flex items-center justify-center"
              >
                <Button
                  type="icon"
                  className="w-4 flex justify-center text-[22px]"
                  icon={<FontAwesomeIcon icon={faEllipsisV} />}
                />
              </span>
              <ul
                tabIndex={0}
                className="dropdown-content ring-1 ring-gray-100 menu shadow bg-base-100 rounded-box w-52"
              >
                <li>
                  <span>
                    <FontAwesomeIcon icon={faPenToSquare} /> Edit
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faFileExport} /> Export
                  </span>
                </li>
                <li>
                  <span>
                    <FontAwesomeIcon icon={faTrashCan} /> Delete
                  </span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LeftMenu;
