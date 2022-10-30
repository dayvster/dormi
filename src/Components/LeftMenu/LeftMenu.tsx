import React from "react";
import Button from "../Buttons/Button";
import Searchbar from "../Searchbar/Searchbar";
import { Elipsis, Plus } from "../SVG/SVG";
export interface ILeftMenuProps {}
export const LeftMenu = (props: React.PropsWithChildren<ILeftMenuProps>) => {
  return (
    <div className="left-menu flex flex-col w-leftmenu min-h-full shadow-xl">
      <header className="w-full border-b flex flex-col border-gray-300">
        <Searchbar />
        <div className="collection-actions flex m-2">
          <div className="collection-name">
            <span className="text-sm uppercase">{"Collection"}</span>
          </div>
          <Button
            onClick={() => {
              alert("yo");
            }}
            type="icon"
            shape="circle"
            icon={<Plus />}
          />
          <Button
            type="icon"
            shape="circle"
            icon={<Elipsis rotation={"vertical"} />}
          />
        </div>
      </header>
    </div>
  );
};
export default LeftMenu;
