import React from "react";
import LoginBtn from "./LoginBtn";

function NavigationLinks() {
  return (
    <>
      <div className=" flex gap-5  flex-wrap">
        <div className="flex justify-between gap-5 my-auto flex-wrap">
          <div className="text-neutral-700 text-lg">Home</div>
          <div className="text-neutral-700 text-lg">Flashcard</div>
          <div className="text-neutral-700 text-lg">Contact</div>
          <div className="text-neutral-700 text-lg">FAQ</div>
        </div>
        <LoginBtn />
      </div>
    </>
  );
}

export default NavigationLinks;
