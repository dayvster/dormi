import { useModalStore } from "../../store/modalStore";
import { faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export interface IModalHeaderProps {
  title?: string;
}
export const ModalHeader = (props: IModalHeaderProps) => {
  const { title = "" } = props;
  const closeModal = useModalStore((state) => state.close);
  return (
    <header className="flex w-full justify-between">
      <div className="title">
        <h2 className="text-lg font-semibold">{title}</h2>
      </div>
      <div className="controls">
        <button className="btn-sm btn-circle" onClick={() => closeModal()}>
          <FontAwesomeIcon icon={faTimes} />
        </button>
      </div>
    </header>
  );
};
