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
    <div
      className={`${background} text-white px-5 py-16 flex flex-col gap-6 place-content-center md:py-0 flex-1`}
    >
      <p className="text-sm">{subtitle}</p>
      <h2 className="text-3xl pr-16 md:pr-32 lg:pr-0">{title}</h2>
      <p className="text-sm">{body}</p>
      <Button {...notFilledButton} />
    </div>
  );
}

export default Board;
