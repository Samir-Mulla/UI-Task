import React from "react";
import CircleLogoIcon from "../assets/images/circle-logo.svg";
import TextLogoIcon from "../assets/images/textlogo.svg";
import FilledPlusIcon from "../assets/images/filled-plus.svg";

function CreateFlashcard() {
  return (
    <>
      <div className="flex justify-between mt-16 mb-32 flex-wrap">
        <div className="flex justify-between">
          <img loading="lazy" srcSet={CircleLogoIcon} />
          <div className="justify-center items-stretch flex grow flex-col self-start my-auto">
            <div className="text-zinc-500 text-xs font-bold">Published by</div>
            <img loading="lazy" src={TextLogoIcon} />
          </div>
        </div>

        <div className="items-stretch self-center flex gap-4">
          <img
            loading="lazy"
            src={FilledPlusIcon}
            className="aspect-square object-contain object-center  overflow-hidden w-[40px] shrink-0"
          />
          <div className="text-2xl font-semibold bg-clip-text self-center grow whitespace-nowrap my-auto bg-gradient-to-t from-blue-600 to-blue-900 text-transparent">
            Create Flashcard
          </div>
        </div>
      </div>
    </>
  );
}

export default CreateFlashcard;
