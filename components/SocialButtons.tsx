import React from "react";
import { FaDiscord, FaInstagram } from "react-icons/fa";
import { FiTwitter, FiGithub } from "react-icons/fi";

export const SocialButtons = () => {
  const socials = [
    { icon: FiTwitter, link: "https://twitter.com/joinaviato" },
    { icon: FiGithub, link: "https://github.com/joinaviato" },
    { icon: FaDiscord, link: "https://discord.gg/vHMjFuPcNt" },
  ];

  return (
    <div className="flex items-center gap-[1rem]">
      {socials.map((social, i) => {
        return (
          <a key={i} href={social.link} target="_blank" rel="noreferrer">
            <social.icon className="h-6 w-6 hover:opacity-[0.8] text-[#fff] " />
          </a>
        );
      })}
    </div>
  );
};
