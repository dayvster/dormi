import React from "react";
export interface IButtonProps {
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  className?: string;
  type?: "button" | "icon" | "text" | "outline";
  onClick?: React.MouseEventHandler<HTMLElement>;
}
export const Button = (props: React.PropsWithChildren<IButtonProps>) => {
  const {
    children,
    className,
    onClick,
    type = "button",
    iconPosition = "left",
    icon = <></>,
  } = props;
  return (
    <div
      onClick={onClick}
      className={`button ${className} flex items-center fill-white `}
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
