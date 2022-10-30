import React from "react";
export interface IButtonProps {
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
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
    shape = "rounded",
    icon = <></>,
  } = props;
  return (
    <div
      onClick={onClick}
      className={`button ${className} flex items-center ${shape}`}
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
