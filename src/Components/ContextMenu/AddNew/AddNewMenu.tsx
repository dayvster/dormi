import { faNoteSticky, faFolder } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useModalStore } from "../../../store/modalStore";
import { NewCollectionModal } from "../../Modal/NewCollectionModal";
import { NewFolderModal } from "../../Modal/NewFolderModal";

export interface IAddNewMenuProps {}
export const AddNewMenu = (props: IAddNewMenuProps) => {
  const modalStore = useModalStore((state) => state);

  const handleNewCollectionClick = () => {
    modalStore.open(<NewCollectionModal />);
  };

  const handleNewFolderClick = () => {
    modalStore.open(<NewFolderModal />);
  };

  return (
    <ul
      tabIndex={0}
      className="dropdown-content ring-1 ring-base-100 menu shadow bg-base-200 rounded-box w-52"
    >
      <li>
        <span onClick={handleNewCollectionClick}>
          <FontAwesomeIcon icon={faNoteSticky}></FontAwesomeIcon> New Collection
        </span>
      </li>
      <li>
        <span onClick={handleNewFolderClick}>
          <FontAwesomeIcon icon={faFolder}></FontAwesomeIcon> New Folder
        </span>
      </li>
    </ul>
  );
};
