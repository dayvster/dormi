import React from "react";
import Navi from "../Components/Navi/Navi";
export interface IProps {}
export const DefaultLayout = (props: React.PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <div className="flex flex-col h-full w-full">
      <Navi></Navi>
      {children}
    </div>
  );
};
export default DefaultLayout;
