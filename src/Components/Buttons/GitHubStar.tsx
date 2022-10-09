import React from "react";
import GitHubIcon from "../Icons/Github.icon";
export interface GitHubStarButtonProps {
  className?: string;
}
export const GitHubStarButton = (
  props: React.PropsWithChildren<GitHubStarButtonProps>
) => {
  const { className } = props;
  return (
    <div
      className={`flex ring-1 ring-gray-400 rounded cursor-pointer items-center ${className}`}
    >
      <div className="flex px-1 hover:bg-gray-100 items-center">
        <GitHubIcon className="flex items-center" width={28} height={28} />
        <span>Stars</span>
      </div>
      <div className="border-l hover:bg-gray-100 border-gray-400 px-1 items-center flex">
        0
      </div>
    </div>
  );
};
export default GitHubStarButton;
