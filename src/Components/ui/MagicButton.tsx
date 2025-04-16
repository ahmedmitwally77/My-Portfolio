import React from "react";

const MagicButton = ({
  title,
  icon,
  position,
  handleClick,
  otherClasses,
}: {
  title: string;
  icon: React.ReactNode;
  position: string;
  handleClick?: () => void;
  otherClasses?: string;
}) => {
  return (
    <button
      className="relative inline-flex h-12 w-full md:w-60 md:mt-10 overflow-hidden rounded-lg p-[1px] 
                focus:outline-none transition-transform duration-300 hover:scale-105"
      onClick={handleClick}
    >
      <span
        className="absolute inset-[-1000%] animate-[spin_0.3s_linear_infinite] 
                      bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] 
                      transition-opacity duration-300 hover:opacity-80"
      />

      <span
        className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg 
                    bg-slate-950 px-7 text-sm font-medium text-white backdrop-blur-3xl gap-2 
                    transition-colors duration-300 hover:bg-slate-800 ${otherClasses}`}
      >
        {position === "left" && <span className="mt-1">{icon}</span>}
        {title}
        {position === "right" && <span className="mt-1">{icon}</span>}
      </span>
    </button>
  );
};

export default MagicButton;
