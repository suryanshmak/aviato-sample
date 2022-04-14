import { SocialButtons } from "./SocialButtons";

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
            <p className="cursor-pointer hover:opacity-80">Careers</p>
          </div>
          <p className="cursor-pointer hover:opacity-80">Privacy</p>
          <SocialButtons />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
