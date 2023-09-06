import { useState } from "react";

// Button and ButtonType
import Button from "./Button";
import { ButtonProps } from "../atoms/Button";

export type BoardProps = {
  background: string;
  subtitle: string;
  title: string;
  body: string;
  body2?: string;
  text: string;
  text2: string;
  style: string;
};

function Board({
  background,
  subtitle,
  title,
  body,
  text,
  text2,
  style,
  body2,
}: BoardProps) {
  const [expand, setExpand] = useState(false);
  const notFilledButton: ButtonProps = {
    text: expand ? text2 : text,
    icon: false,
    style: `row-start-5 ${style}`,
    filled: false,
    onClick: handleExpand,
  };

  function handleExpand() {
    setExpand(!expand);
  }

  return (
    <div
      className={`${background} text-white px-5 py-16 flex flex-col gap-6 place-content-center md:py-0 flex-1`}
    >
      <p className="text-sm">{subtitle}</p>
      <h2 className="text-3xl pr-16 md:pr-32 lg:pr-0">{title}</h2>
      <p className="text-sm">{body}</p>
      <p
        className={
          "text-sm transition-opacity duration-200 ease-in " +
          (expand ? "opacity-100 visible" : "opacity-0 hidden")
        }
      >
        {body2}
      </p>
      {body2 && <Button {...notFilledButton} />}
    </div>
  );
}

export default Board;
