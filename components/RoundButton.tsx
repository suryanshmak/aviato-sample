import React from "react";

interface RoundButtonProps {
  content: string;
  onClick: () => void;
  background?: string;
  foreground?: string;
}

export const RoundButton = ({
  content,
  onClick,
  background = "bg-[#fff]",
  foreground = "text-[#fff}",
}: RoundButtonProps) => {
  return (
    <div
      className={`${background} ${foreground} rounded-[12px] py-[0.6rem] px-[1rem] inline-block select-none cursor-pointer hover:opacity-[0.8]`}
      style={{ fontFamily: "'Poppins', sans-serif" }}
      onClick={onClick}
    >
      {content}
    </div>
  );
};
