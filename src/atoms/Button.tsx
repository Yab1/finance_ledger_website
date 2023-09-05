// Icons
import { ChevronRightIcon } from "@heroicons/react/24/outline";

export type ButtonProps = {
  text: string;
  icon: boolean;
  style: string;
} & (
  | {
      filled: true;
      color: string;
    }
  | {
      filled: false;
    }
);

function Button(props: ButtonProps) {
  return (
    <button
      className={`${props.style} ${props.filled ? props.color : ""} ${
        props.filled ? "" : "bg-transparent border"
      } flex place-items-center rounded-md px-5 py-3 gap-1 w-fit h-fit`}
    >
      {props.icon && <ChevronRightIcon className="h-4 aspect-square" />}
      {props.text}
    </button>
  );
}

export default Button;
