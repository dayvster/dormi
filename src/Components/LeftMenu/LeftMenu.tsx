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
import {
  faTrashCan,
  faPenToSquare,
  faFolder,
  faFileLines,
  faFile,
  faNoteSticky,
} from "@fortawesome/free-regular-svg-icons";
import { NewCollectionModal } from "../Modal/NewCollectionModal";
import { CollectionsList } from "../CollectionsList/CollectionsList";
import { useAppStore } from "../../store/AppStore";
import { CollectionContextMenu } from "../ContextMenu/CollectionMenu/CollectionMenu";
import { AddNewMenu } from "../ContextMenu/AddNew/AddNewMenu";

export interface ILeftMenuProps {}
export const LeftMenu = (props: React.PropsWithChildren<ILeftMenuProps>) => {
  const modalStore = useModalStore((state) => state);
  const appState = useAppStore((state) => state);
  return (
    <div className="left-menu flex flex-col w-leftmenu min-h-full border-r border-gray-300 shadow-xl">
      <header className="w-full border-b flex flex-col">
        <Searchbar />
        <div className="collection-actions flex m-2">
          <div className="collection-name">
            <span className="text-sm uppercase">
              {appState.currentCollection?.name ?? "Collections"}
            </span>
          </div>
          <div className="controls flex ml-auto items-center">
            <div className="dropdown cursor-pointer">
              <span tabIndex={0}>
                <Button
                  className="text-white w-[18px] bg-gray-800 h-[18px] text-[13px] btn-circle flex items-center justify-center mx-2"
                  type="icon"
                  icon={<FontAwesomeIcon icon={faPlus} />}
                />
              </span>
              <AddNewMenu />{" "}
              {/*TODO: figure out better naming convention for this*/}
            </div>

            <div className="dropdown cursor-pointer">
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
              <CollectionContextMenu />{" "}
              {/* NOTE: This one is named kinda okay*/}
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LeftMenu;
