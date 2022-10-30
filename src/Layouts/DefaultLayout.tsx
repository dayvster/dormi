import React from "react";
import LeftMenu from "../Components/LeftMenu/LeftMenu";
import Navi from "../Components/Navi/Navi";
export interface IProps {}
export const DefaultLayout = (props: React.PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-full w-full">
      <Navi></Navi>
      <div className="flex w-full h-full">
        <LeftMenu></LeftMenu>
        <div className="content">{children}</div>
      </div>
    </div>
  );
};
export default DefaultLayout;
