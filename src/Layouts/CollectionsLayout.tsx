import React from "react";
import Navi from "../Components/Navi/Navi";
export interface ICollectionsLayoutProps {}
export const CollectionsLayout = (
  props: React.PropsWithChildren<ICollectionsLayoutProps>
) => {
  const { children } = props;
  return (
    <>
      <Navi></Navi>
      {children}
    </>
  );
};
export default CollectionsLayout;
