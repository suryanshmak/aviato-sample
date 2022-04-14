import React, { EventHandler, useEffect, useRef, useState } from "react";
import { IconType } from "react-icons";
import { BsFillCaretDownFill } from "react-icons/bs";
import { FiArrowRight } from "react-icons/fi";

interface TextInputProps {
  Icon: string;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => Promise<void>;
  placeholder: string;
  value: string;
  setValue(value: string): void;
  type?: string;
  width?: string;
  src: string;
}

export const TextInput = ({
  Icon,
  onSubmit,
  placeholder,
  value,
  setValue,
  type = "text",
  width = "w-full",
  src = "https://cdn.discordapp.com/icons/867114954560503819/b634a2e99342b092f8b3d682b7615405.webp?size=240",
}: TextInputProps) => {
  const [active, setActive] = useState<boolean>(false);
  const ref = useRef<HTMLFormElement>(null);

  useEffect(() => {
    const handleClick = (e: React.ChangeEvent<HTMLFormElement>) => {
      if (!ref.current.contains(e.target)) {
        setActive(false);
      }
    };
    //@ts-ignore
    document.addEventListener("click", handleClick);
    //@ts-ignore
    return () => document.removeEventListener("click", handleClick);
  }, []);
  return (
    <div
      className={`relative ${width} rounded-lg flex items-center gap-2 bg-[#171717] border-[0.1rem] border-[#2B2B2B] focus-within:border-[#3981f6]`}
    >
      <form
        className="w-full h-auto bg-[transparent] flex items-center"
        onSubmit={onSubmit}
        ref={ref}
      >
        <div
          className="flex items-center gap-[6px] cursor-pointer"
          onClick={() => setActive((prev) => !prev)}
        >
          <div className="ml-4 h-full w-[1.5rem] grid items-center">
            <img src={Icon} alt="icon" className="h-[1.8rem]" />
          </div>
          <BsFillCaretDownFill className="w-[0.8rem]" />
        </div>
        <input
          type={type}
          className="w-full h-full bg-[transparent] !outline-none !border-none !shadow-none !ring-0"
          placeholder={placeholder}
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        {active ? (
          <div className="absolute top-16 p-2 w-full lg:w-[75%] max-h-[17rem] overflow-hidden scrollbar-none bg-[#000000] shadow-md border border-[#2B2B2B] rounded-xl z-[999] flex flex-col gap-3">
            <div>Search something</div>
            <div>India</div>
            <div>USA</div>
            <div>Africa</div>
            <div>China</div>
            <div>England</div>
          </div>
        ) : null}
      </form>
      <button type="submit" className="cursor-pointer transition-all">
        <img
          src={src}
          alt="icon"
          className="h-full w-[3rem] md:w-auto max-w-[3.4rem] rounded-r-md"
        />
      </button>
    </div>
  );
};
