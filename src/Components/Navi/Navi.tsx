import Link from "next/link";
import React, { useEffect } from "react";
import GitHubStarButton from "../Buttons/GitHubStar";
import Dropdown from "../Dropdown/Dropdown";
import GitHubIcon from "../Icons/Github.icon";
import SettingsIcon from "../Icons/Settings.icon";
import Logo from "../Logo/Logo";

export interface IProps {}
export const Navi = (props: React.PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <div className="flex flex-row w-full py-2 px-4 border-b border-gray-300 items-center ">
      <Logo className="mr-2" />
      <GitHubStarButton className="mr-2" />
      <nav className="flex flex-row space-x-2 font-semibold breadcrumbs">
        <ul>
          <li>
            <Link href="/">Collections</Link>
          </li>
        </ul>
      </nav>
      <div className="flex ml-auto">
        <div className="dropdown dropdown-end cursor-pointer">
          <span tabIndex={0}>
            <SettingsIcon />
          </span>
          <ul
            tabIndex={0}
            className="dropdown-content ring-1 ring-gray-100 menu shadow bg-base-100 rounded-box w-52"
          >
            <Dropdown
              items={[
                { label: "General", onclick: () => {} },
                { label: "Appearance", onclick: () => {} },
                { label: "Keyboard", onclick: () => {} },
              ]}
            ></Dropdown>
          </ul>
        </div>
      </div>
    </div>
  );
};
export default Navi;
