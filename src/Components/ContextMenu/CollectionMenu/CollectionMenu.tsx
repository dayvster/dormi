import {
  faPenToSquare,
  faFileExport,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface ICollectionMenuProps {}
export const CollectionContextMenu = (props: ICollectionMenuProps) => {
  return (
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
  );
};
