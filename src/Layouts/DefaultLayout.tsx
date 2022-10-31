import React from "react";
import LeftMenu from "../Components/LeftMenu/LeftMenu";
import Modal from "../Components/Modal/Modal";
import Navi from "../Components/Navi/Navi";
export interface IProps {}
export const DefaultLayout = (props: React.PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-full w-full">
      <Navi />
      <div className="flex w-full h-full">
        <LeftMenu></LeftMenu>
        <div className="content m-4">{children}</div>
      </div>
      <Modal />
    </div>
  );
};
export default DefaultLayout;
