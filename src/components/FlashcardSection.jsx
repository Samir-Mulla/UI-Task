import React from "react";
import FlashcardControls from "./FlashcardControls";
// import BulbIcon from "../assets/images/bulb.svg";
// import SoundIcon from "../assets/images/sound.svg";
import FlashCard from "../assets/images/flashcard.svg";

function FlascardSection() {
  return (
    <>
      <div className="flex justify-center">
        {/* <div className="bg-gradient-to-tr from-blue-400 to-blue-900 p-4 rounded-[40px] shadow-md w-[50%]">
          <div className="mt-5 px-5 flex justify-between">
            <img
              loading="lazy"
              src={BulbIcon}
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
            <img
              loading="lazy"
              src={SoundIcon}
              className="aspect-square object-contain object-center w-[34px] overflow-hidden shrink-0 max-w-full"
            />
          </div>

          <p className="text-white text-center text-4xl font-bold tracking-wider self-center whitespace-nowrap mt-28 mb-24 max-md:my-10">
            9 + 6 + 7x - 2x - 3
          </p>
        </div> */}
        <img src={FlashCard} alt="card" />
      </div>
      <FlashcardControls />
    </>
  );
}

export default FlascardSection;
