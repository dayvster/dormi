import React from "react";

export interface IDropdownButtonProps {
  className?: string;
}
export const DropdownButton = (
  props: React.PropsWithChildren<IDropdownButtonProps>
) => {
  const { children, className } = props;
  return (
    <>
      <button
        id="dropdownDefault"
        data-dropdown-toggle="dropdown"
        className={`text-white btn btn-primary ${className}
          focus:outline-none focus:ring-blue-300 font-medium 
          rounded-lg text-sm text-center 
          items-center`}
        type="button"
      >
        {children}
        <svg
          className="ml-2 w-4 h-4"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          ></path>
        </svg>
      </button>
    </>
  );
};
