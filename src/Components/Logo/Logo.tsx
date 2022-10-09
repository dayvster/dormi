import Link from "next/link";
import React from "react";
export interface IProps {
  className?: string;
}
export const Logo = (props: React.PropsWithChildren<IProps>) => {
  const { children, className } = props;
  return (
    <div className={className}>
      <Link href="/">
        <h1 className="font-bold cursor-pointer text-primary">[ DORMI ]</h1>
      </Link>
    </div>
  );
};
export default Logo;
