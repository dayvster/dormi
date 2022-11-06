import React from "react";
export interface ISearchbarProps {
  className?: string;
  placeholder?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
export const Searchbar = (props: React.PropsWithChildren<ISearchbarProps>) => {
  const { children, className, placeholder = "Search", onChange } = props;
  return (
    <div className={`${className} w-full`}>
      <input
        placeholder={placeholder}
        type="text"
        className="w-full py-1 px-2 border border-gray-300 "
        onChange={onChange}
      />
    </div>
  );
};
export default Searchbar;
