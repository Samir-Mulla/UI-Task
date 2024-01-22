import React from "react";
import DownAngle from "../assets/images/down-angle.svg";

function FaqSection() {
  return (
    <>
      <div className=" mt-10 mb-48">
        <div className="ml bg-gradient-to-t from-blue-600 to-blue-900 bg-clip-text text-transparent text-5xl font-bold tracking-wide">
          FAQ
        </div>
        <div className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-11 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:mt-10 max-md:px-5">
          <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
            Can education flashcards be used for all age groups?
          </div>
          <img
            loading="lazy"
            src={DownAngle}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5">
          <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto">
            How do education flashcards work?
          </div>
          <img
            loading="lazy"
            src={DownAngle}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
        <div className="justify-between items-center border flex w-[848px] max-w-full gap-5 mt-8 px-6 py-4 rounded-xl border-solid border-blue-600 self-start max-md:flex-wrap max-md:px-5">
          <div className="text-zinc-800 text-base font-semibold leading-7 grow shrink basis-auto my-auto max-md:max-w-full">
            Can education flashcards be used for test preparation?
          </div>
          <img
            loading="lazy"
            src={DownAngle}
            className="aspect-square object-contain object-center w-6 overflow-hidden self-stretch shrink-0 max-w-full"
          />
        </div>
      </div>
    </>
  );
}

export default FaqSection;
