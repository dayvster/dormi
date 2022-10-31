import Link from "next/link";
import React from "react";
import GitHubStarButton from "../Buttons/GitHubStar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGear } from "@fortawesome/free-solid-svg-icons";
import Dropdown from "../Dropdown/Dropdown";
import Logo from "../Logo/Logo";

export interface IProps {}
export const Navi = (props: React.PropsWithChildren<IProps>) => {
  const { children } = props;
  return (
    <div className="flex flex-row w-full py-2 px-4 border-b border-gray-300 items-center ">
      <Logo className="mr-2" />
      <GitHubStarButton className="mx-4" />
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
            <FontAwesomeIcon icon={faGear} />
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
