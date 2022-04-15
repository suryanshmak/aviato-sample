import { useState } from "react";
import { TextInput } from "../components/CountryInput";
import { FiMic } from "react-icons/fi";
import { BsPeopleFill, BsCurrencyDollar, BsArrowRight } from "react-icons/bs";
import { ImRocket } from "react-icons/im";
import { Alert } from "../components/Alert";
import { Meta } from "../partials/Meta";
import { IconType } from "react-icons";
import twilioclient from "twilio";
import Prefixnum from "prefix-number";
import Image from "next/image";

export default function Home() {
  const [number, setNumber] = useState<string>("");
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

  const submitWaitlistForm = async (
    e: React.FormEvent<HTMLFormElement>,
    country: string
  ) => {
    e.preventDefault();

    if (!number) return toggleAlert("error", "Please supply a number.");

    // const accountSid = process.env.NEXT_PUBLIC_ACCOUNT_SID;
    // const authToken = process.env.NEXT_PUBLIC_AUTH_TOKEN;
    // const client = twilioclient(accountSid, authToken);

    // try {
    //   const { sid } = await client.messages.create({
    //     body: "Hello there!",
    //     from: "+15555555555",
    //     mediaUrl: ["https://giphy.com/gifs/whale-qhhamrBnxSKNG"],
    //     to: `${new Prefixnum(country).toPrefix()}${number}`,
    //   });

    //   if (sid) {
    //     toggleAlert("success", "You'll be notified for early access!");
    //     setNumber("");
    //   }
    // } catch (err) {
    //   console.error(err);
    //   toggleAlert("error", "Something went wrong, try again later.");
    // }
  };

  type Step = {
    icon: IconType;
    title: string;
    shouldRender: boolean;
  };

  const steps: Step[] = [
    { icon: FiMic, title: "Pitch", shouldRender: true },
    { icon: BsPeopleFill, title: "Meet", shouldRender: true },
    { icon: BsCurrencyDollar, title: "Raise", shouldRender: true },
    { icon: ImRocket, title: "Launch", shouldRender: false },
  ];

  return (
    <>
      <Meta
        title="Aviato"
        description="Take the next leap."
        keywords="startup"
      />
      <section className="h-full lg:w-screen flex xl:gap-[10ch] items-center">
        <div className="h-[75%]">
          <div className="flex items-center lg:justify-between lg:gap-[4rem] self-start">
            <div className="flex flex-col gap-[1.5rem] 2xl:gap-[2rem] md:w-[35rem] 2xl:w-[37rem] w-full">
              <h1 className="text-[2rem] sm:text-[3rem] md:text-[3.5rem] xl:text-[4rem] 2xl:text-[4.2rem] font-bold lg:leading-[4rem] xl:leading-[5rem] select-none">
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
                  value={number}
                  setValue={setNumber}
                  onSubmit={submitWaitlistForm}
                  type="number"
                  src="/icons/logo.png"
                />
                <span className="text-[0.8rem]">
                  We&apos;re probably going to spam you 😉
                </span>
              </div>
            </div>
          </div>
        </div>
        <div className="hidden h-full lg:flex items-center select-none">
          <img
            src="/icons/Mockup.svg"
            alt=""
            draggable={false}
            className="w-[640px] h-[640px] xl:h-[720px] xl:w-[720px] pointer-events-none"
          />
        </div>
      </section>
      <div className="hidden md:block pb-10">
        <h2 className="text-[1.5rem] sm:text-[2rem] md:text-[2.5rem] xl:text-[3rem] 2xl:text-[3.5rem] font-bold lg:leading-[4rem] xl:leading-[5rem] select-none">
          Four <span className="text-transform-gradient">easy</span> steps:
        </h2>
        <div className="pt-6 pb-16 w-10/12 transform translate-x-20 grid items-center">
          <div
            className="hidden lg:block transform translate-x-10 relative w-[88%] xl:w-[90%] h-12 border-t border-l 
        border-r border-neutral-800 rounded-t-2xl"
          >
            <div
              className="absolute w-0 h-0 border-[12px] border-b-0 border-[transparent] right-[-12px] bottom-0"
              style={{ borderTopColor: "white" }}
            />
          </div>
          <ul className="w-full py-6 flex items-center justify-between">
            {steps.map((step) => (
              <>
                <li
                  key={`${step.title}`}
                  className={`border-[1px] rounded-md border-[#3a3a3a] py-4 w-[94px] grid place-items-center gap-2`}
                >
                  <step.icon className="w-6 h-6" />
                  <p className="text-[18px]">{step.title}</p>
                </li>
                {step.shouldRender ? (
                  <BsArrowRight className="w-6 h-6" />
                ) : null}
              </>
            ))}
          </ul>
          <div className="hidden lg:block transform translate-x-10 h-12 border-b relative w-[88%] xl:w-[90%] border-l border-r border-neutral-800 rounded-b-2xl">
            <div
              className="absolute w-0 h-0 border-[12px] border-t-0 border-[transparent] left-[-12px] top-0"
              style={{ borderBottomColor: "white" }}
            />
          </div>
        </div>
      </div>
      <Alert
        type={showAlert.type as any}
        show={showAlert.show}
        message={showAlert.message}
      />
    </>
  );
}
