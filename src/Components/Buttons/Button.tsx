import React from "react";
export interface IButtonProps {
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  noBackground?: boolean;
  className?: string;
  type?: "button" | "icon" | "text" | "outline";
  shape?: "circle" | "square" | "rounded";
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export const Button = (props: React.PropsWithChildren<IButtonProps>) => {
  const {
    children,
    className,
    onClick,
    type = "button",
    iconPosition = "left",
    noBackground = false,
    shape = "rounded",
    icon = <></>,
  } = props;
  return (
    <div
      onClick={onClick}
      className={`button ${className} flex items-center ${shape}  ${
        noBackground ? "bg-none fill-gray-800" : "bg-black"
      } fill-white `}
    >
      {iconPosition === "left" && icon}
      {type === "button" && (
        <button className="flex items-center">{children}</button>
      )}
      {iconPosition === "right" && icon}
    </div>
  );
};
export default Button;
