import { COUNTRIES } from "../lib/countries";
import { SelectMenuOption } from "../lib/types";
import { AnimatePresence, motion } from "framer-motion";
import React, { MutableRefObject, useEffect, useState } from "react";
import { BsFillCaretDownFill, BsSearch } from "react-icons/bs";
import Prefixnum from "prefix-number";

type Props = {
  id: string;
  open: boolean;
  onToggle: () => void;
  onChange: (value: any) => void;
  selectedValue: SelectMenuOption;
};

// eslint-disable-next-line react/display-name
export const CountrySelector = React.forwardRef<HTMLDivElement, Props>(
  (props, ref) => {
    const [query, setQuery] = useState("");

    useEffect(() => {
      const mutableRef = ref as MutableRefObject<HTMLDivElement | null>;

      const handleClickOutside = (event: any) => {
        if (
          mutableRef.current &&
          !mutableRef.current.contains(event.target) &&
          props.open
        ) {
          props.onToggle();
          setQuery("");
        }
      };

      document.addEventListener("click", handleClickOutside);
      return () => {
        document.removeEventListener("click", handleClickOutside);
      };
    }, [ref]);

    return (
      <div ref={ref}>
        <div className="mt-1 relative">
          <button
            type="button"
            className="bg-white relative h-full shadow-sm pl-3 text-left cursor-pointer sm:text-sm"
            aria-haspopup="listbox"
            aria-expanded="true"
            aria-labelledby="listbox-label"
            onClick={props.onToggle}
          >
            <span className="truncate flex items-center gap-2">
              <span className="w-7">
                <img
                  alt={`${props.selectedValue.value}`}
                  src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${props.selectedValue.value}.svg`}
                  className="rounded-sm"
                />
              </span>
              <span className="inline">
                <BsFillCaretDownFill className="w-2" />
              </span>
              <span className="h-6 rounded-sm w-[2px] bg-[#2d2d2d]" />
              <p>+{new Prefixnum(props.selectedValue.value).toPrefix()}</p>
            </span>
          </button>

          <AnimatePresence>
            {props.open && (
              <motion.ul
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.1 }}
                className={`bg-[#181818] absolute z-10 mt-4 bg-white shadow-lg max-h-80 rounded-md text-base border-[1px] border-[#454545] sm:text-sm`}
                style={{ width: "calc(14vw + 12rem)" }}
                tabIndex={-1}
                role="listbox"
                aria-labelledby="listbox-label"
                aria-activedescendant="listbox-option-3"
              >
                <div className="p-1 flex items-center z-10">
                  <BsSearch className="ml-2 w-5 h-5 text-[#5e5e5e]" />
                  <input
                    type="search"
                    name="search"
                    autoComplete="off"
                    className="bg-[#181818] border-0 outline-none focus:ring-0 w-full sm:text-sm"
                    placeholder="Search a country"
                    onChange={(e) => setQuery(e.target.value)}
                  />
                </div>
                <hr className="border-[#3d3d3d] w-full pb-1" />
                <div className={"max-h-60 overflow-y-scroll p-2"}>
                  {COUNTRIES.filter((country) =>
                    country.title.toLowerCase().startsWith(query.toLowerCase())
                  ).length === 0 ? (
                    <li className="text-gray-900 cursor-default select-none relative py-2 pl-3 pr-9">
                      No countries found
                    </li>
                  ) : (
                    COUNTRIES.filter((country) =>
                      country.title
                        .toLowerCase()
                        .startsWith(query.toLowerCase())
                    ).map((value, index) => {
                      return (
                        <li
                          key={`${props.id}-${index}`}
                          className="text-gray-900 cursor-pointer rounded-md px-2 py-3 hover:bg-[#343434] select-none relative flex items-center hover:bg-gray-50 transition no-scrollbar"
                          id="listbox-option-0"
                          role="option"
                          onClick={() => {
                            props.onChange(value.value);
                            setQuery("");
                            props.onToggle();
                          }}
                        >
                          <img
                            alt={`${value.value}`}
                            src={`https://purecatamphetamine.github.io/country-flag-icons/3x2/${value.value}.svg`}
                            className="inline mr-2 h-4 rounded-sm"
                          />

                          <span className="font-normal truncate">
                            {value.title}
                          </span>
                        </li>
                      );
                    })
                  )}
                </div>
              </motion.ul>
            )}
          </AnimatePresence>
        </div>
      </div>
    );
  }
);
