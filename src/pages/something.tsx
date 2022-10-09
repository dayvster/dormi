import React from "react";
import DefaultLayout from "../Layouts/DefaultLayout";
import { NextPageWithLayout } from "./_app";
export interface IProps {}
export const Something: NextPageWithLayout = (
  props: React.PropsWithChildren<IProps>
) => {
  const { children } = props;
  return (
    <div>
      <h2 className="text-3xl">Something</h2>
    </div>
  );
};

Something.getLayout = (page) => {
  return <DefaultLayout>{page}</DefaultLayout>;
};
export default Something;
