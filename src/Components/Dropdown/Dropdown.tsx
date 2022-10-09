import React from "react";
interface IDropdownItem {
  label: string;
  onclick: () => void;
}
export interface DropdownProps {
  className?: string;
  items: IDropdownItem[];
}
export const Dropdown = (props: React.PropsWithChildren<DropdownProps>) => {
  const { children, className, items = [] } = props;
  return (
    <div className={className}>
      {items.map((item, index) => (
        <li
          className="py-1 px-2 hover:bg-base-200"
          key={index}
          onClick={item.onclick}
        >
          {item.label}
        </li>
      ))}
    </div>
  );
};
export default Dropdown;
