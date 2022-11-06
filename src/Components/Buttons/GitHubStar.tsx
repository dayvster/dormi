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
      className={`flex ring-1 border-base-400 text-sm rounded cursor-pointer items-center ${className}`}
    >
      <div className="flex px-1 bg-base-100 font-semibold text-gray-600 items-center">
        <GitHubIcon
          className="flex fill-gray-600 items-center"
          width={28}
          height={28}
        />
        <span>Stars</span>
      </div>
      <div className="border-l bg-base-200 border-base-200 px-1 items-center flex">
        0
      </div>
    </div>
  );
};
export default GitHubStarButton;
