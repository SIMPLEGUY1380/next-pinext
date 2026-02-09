import { MouseEventHandler } from "react";
import clsx from "clsx";

function Question({
  text,
  onClick,
  isActive
}: {
  text: string;
  onClick: () => void;
  isActive: 0|1;
}) {
  const handleClick: MouseEventHandler<HTMLButtonElement> = () => {
    onClick();
  };

  return (
    <button
    disabled={!isActive}
      onClick={handleClick}
      className={clsx(
        `relative rounded-xl px-4 py-2.5 text-right text-white font-medium
        transition-all duration-200 transform
        min-w-30 sm:min-w-35 max-w-full
        whitespace-nowrap overflow-hidden text-ellipsis
        focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-400`,
        isActive
          ? "bg-purple-600 shadow-md scale-105"
          : "bg-primary-500 hover:bg-primary-600 active:scale-95 shadow-sm hover:shadow-md"
      )}
      aria-label={text}
      role="button"
    >
      {text}

      <span className="absolute inset-0 rounded-xl opacity-0 hover:opacity-20 bg-white transition-opacity pointer-events-none"></span>
    </button>
  );
}

export default Question;
