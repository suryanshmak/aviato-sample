import React, { useState } from "react";
import { CountrySelector } from "./Selector";
import { COUNTRIES } from "../lib/countries";
import { SelectMenuOption } from "../lib/types";
interface TextInputProps {
  onSubmit: (
    e: React.FormEvent<HTMLFormElement>,
    country: string
  ) => Promise<void>;
  placeholder: string;
  value: string;
  setValue(value: string): void;
  type?: string;
  width?: string;
  src: string;
}

export const TextInput = ({
  onSubmit,
  placeholder,
  value,
  setValue,
  type = "text",
  width = "w-full",
  src = "https://cdn.discordapp.com/icons/867114954560503819/b634a2e99342b092f8b3d682b7615405.webp?size=240",
}: TextInputProps) => {
  const [active, setActive] = useState<boolean>(false);
  const [country, setCountry] = useState<string>("AF");
  const ref = React.createRef<HTMLDivElement>();

  return (
    <div
      className={`relative ${width} rounded-lg flex items-center gap-2 bg-[#171717] border-[0.1rem] border-[#2B2B2B] focus-within:border-[#3981f6]`}
    >
      <CountrySelector
        id="countries"
        ref={ref}
        open={active}
        onToggle={() => setActive((prev) => !prev)}
        onChange={(val) => setCountry(val)}
        selectedValue={
          COUNTRIES.find(
            (option) => option.value === country
          ) as SelectMenuOption
        }
      />
      <form
        className="h-auto bg-[transparent] flex items-center grow"
        onSubmit={(e) => onSubmit(e, country)}
      >
        <input
          type={type}
          className="w-full h-full bg-[transparent] !outline-none !border-none !shadow-none !ring-0 appearance-none"
          placeholder={placeholder}
          value={Number(value) || ""}
          onChange={(e) => setValue(e.target.value)}
        />
        <button type="submit" className="cursor-pointer transition-all">
          <img
            src={src}
            alt="icon"
            className="h-full w-[3rem] md:w-auto max-w-[3.4rem] rounded-r-md"
          />
        </button>
      </form>
    </div>
  );
};
