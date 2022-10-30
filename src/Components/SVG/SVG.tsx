export const Plus = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M12 5C12.5523 5 13 5.44772 13 6V18C13 18.5523 12.5523 19 12 19C11.4477 19 11 18.5523 11 18V6C11 5.44772 11.4477 5 12 5Z"
        fill="black"
      />
      <path
        fill-rule="evenodd"
        clip-rule="evenodd"
        d="M5 12C5 11.4477 5.44772 11 6 11H18C18.5523 11 19 11.4477 19 12C19 12.5523 18.5523 13 18 13H6C5.44772 13 5 12.5523 5 12Z"
        fill="black"
      />
    </svg>
  );
};

export const Elipsis = (props: { rotation?: "vertical" | "horizontal" }) => {
  const { rotation = "horizontal" } = props;
  return (
    <svg
      className={`elipsis ${rotation === "vertical" ? "rotate-90" : ""}`}
      version="1.0"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
      x="0px"
      y="0px"
      width="18px"
      height="24px"
      viewBox="0 0 100 100"
      xmlSpace="preserve"
    >
      <circle cx="50" cy="50" r="10" />
      <circle cx="23.333" cy="50" r="10" />
      <circle cx="76.667" cy="50" r="10" />
    </svg>
  );
};
