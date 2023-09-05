// Button and ButtonType
import Button from "./Button";
import { ButtonProps } from "../atoms/Button";

export type BoardProps = {
  background: string;
  subtitle: string;
  title: string;
  body: string;
  text: string;
};

function Board({ background, subtitle, title, body, text }: BoardProps) {
  const notFilledButton: ButtonProps = {
    text: text,
    icon: false,
    style: "row-start-5",
    filled: false,
  };

  return (
    <div className={`${background} text-white px-5 py-16 flex flex-col gap-6`}>
      <p className="text-sm">{subtitle}</p>
      <h2 className="text-3xl">{title}</h2>
      <p className="text-sm">{body}</p>
      <Button {...notFilledButton} />
    </div>
  );
}

export default Board;
