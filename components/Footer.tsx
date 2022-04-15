import { SocialButtons } from "./SocialButtons";
import Link from "next/link";

const Footer = () => {
  return (
    <footer className="pt-4 py-6 border-t w-full border-neutral-800 lg:relative ">
      <div className="flex flex-col gap-2 lg:flex-row lg:items-center lg:justify-between text-left">
        <div className="flex flex-col gap-2">
          <span className="font-light text-[1rem]">
            Copyright Bachmanity, Inc. 2022. All Rights Reserved.
          </span>
        </div>
        <div className="flex gap-4">
          <div className="flex gap-4">
            <Link href="https://joinaviato.notion.site/joinaviato/Aviato-Careers-f0c7cfb7cd1444bd8450327e8ba8e447">
              <a className="cursor-pointer hover:opacity-80">Careers</a>
            </Link>
          </div>
          <p className="cursor-pointer hover:opacity-80">Privacy</p>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
