import React from "react";
// import ReloadIcon from "../assets/images/reload.svg";
// import FilledLeftIcon from "../assets/images/filled-left-angle.svg";
// import FilledRightIcon from "../assets/images/filled-right-angle.svg";
// import FullScreenIcon from "../assets/images/fullscreen.svg";
import FlashCardControls from "../assets/images/flashcardcontrols.svg";

function FlashcardControls() {
  return (
    <>
      <div className="flex justify-center">
        {/* <div className="flex w-full justify-between mt-8 flex-wrap">
          <img
            loading="lazy"
            src={ReloadIcon}
            className="object-center  fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center  max-w-full my-auto"
          />
          <div className="items-center flex justify-between gap-5">
            <img
              loading="lazy"
              src={FilledLeftIcon}
              className="fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch w-full"
            />
            <div className="text-gray-800 text-2xl font-bold ">01/10</div>
            <img
              loading="lazy"
              src={FilledRightIcon}
              className="aspect-square object-contain  fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-stretch w-full"
            />
          </div>
          <img
            loading="lazy"
            src={FullScreenIcon}
            className="aspect-square object-contain object-center w-[30px] fill-[linear-gradient(180deg,#06286E_0%,#164EC0_100%)] overflow-hidden self-center shrink-0 max-w-full my-auto"
          />
        </div> */}

        <img src={FlashCardControls} alt="" className="mt-10" />
      </div>
    </>
  );
}

export default FlashcardControls;
