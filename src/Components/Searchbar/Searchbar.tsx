import React from "react";
export interface ISearchbarProps {
  className?: string;
}
export const Searchbar = (props: React.PropsWithChildren<ISearchbarProps>) => {
  const { children, className } = props;
  return (
    <div className={`${className} w-full`}>
      <input
        placeholder="Search"
        type="text"
        className="w-full py-1 px-2 border border-gray-300"
      />
    </div>
  );
};
export default Searchbar;
