import { useState } from "react";
import { TextInput } from "../components/CountryInput";
import { FiFlag, FiMail } from "react-icons/fi";
import axios from "axios";
import { Alert } from "../components/Alert";
import { Meta } from "../partials/Meta";

export default function Home() {
  const [email, setEmail] = useState<string>("+1");
  const [showAlert, setShowAlert] = useState({
    type: "",
    show: false,
    message: "",
  });

  const toggleAlert = (type: "success" | "error", message: string) => {
    setShowAlert({
      type,
      show: true,
      message,
    });

    setTimeout(() => {
      setShowAlert({ type: "", show: false, message: "" });
    }, 4000);
  };

  const submitWaitlistForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!email) return toggleAlert("error", "Please supply a number.");

    try {
      const { data } = await axios.post(
        "https://getwaitlist.com/api/v1/waitlists/submit",
        {
          api_key: process.env.NEXT_PUBLIC_WAITLIST_API_KEY,
          email,
          referral_link: document.URL,
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );

      if (data) {
        toggleAlert("success", "You'll be notified for early access!");
        setEmail("");
      }
    } catch (err) {
      console.error(err);
      toggleAlert("error", "Something went wrong, try again later.");
    }
  };
  return (
    <>
      <Meta
        title="Aviato"
        description="Take the next leap."
        keywords="startup"
      />
      <section className="md:pb-10 sm:py-10 h-[85%] lg:h-[100%] w-full flex items-center">
        <div className="h-[75%] flex justify-between grow">
          <div className="flex items-center lg:justify-between lg:gap-[4rem] self-start grow">
            <div className="flex flex-col gap-[1.5rem] 2xl:gap-[2rem] md:w-[35rem] 2xl:w-[37rem] w-full">
              <h1 className="text-[2rem] sm:text-[2.5rem] md:text-[3rem] xl:text-[4rem] 2xl:text-[4.2rem] font-bold lg:leading-[4rem] xl:leading-[5rem] select-none">
                Let your next big idea
                <span className="animated-text"> take flight!</span>
              </h1>
              <p className="text-[1rem] md:text-[1.25rem] xl:text-[1.45rem] font-regular tracking-wider lg:leading-[2.7rem]">
                All it takes is{" "}
                <span className="text-transform-gradient">two taps</span>, and a
                <span className="text-transform-gradient"> minute</span> long
                video pitch 😃
              </p>
              <div className="flex flex-col gap-3 select-none w-full">
                <TextInput
                  placeholder=""
                  width="w-full sm:w-[27rem] 2xl:w-[35rem]"
                  value={email}
                  setValue={setEmail}
                  Icon="https://purecatamphetamine.github.io/country-flag-icons/3x2/US.svg"
                  onSubmit={submitWaitlistForm}
                  type="text"
                  src="https://cdn.discordapp.com/icons/867114954560503819/b634a2e99342b092f8b3d682b7615405.webp?size=240"
                />
                <span className="text-[0.8rem]">
                  We&apos;re probably going to spam you 😉
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex h-screen lg:w-1/2 w-3/4 justify-center">
          <img
            src="/icons/Mockup.svg"
            alt="cover-image"
            draggable={false}
            className="my-8 h-[680px] w-[840px] pointer-events-none"
          />
        </div>
      </section>
      <Alert
        type={showAlert.type as any}
        show={showAlert.show}
        message={showAlert.message}
      />
    </>
  );
}
