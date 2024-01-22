import React from "react";
import HomeIcon from "../assets/images/home.svg";
import RightAngleIcon from "../assets/images/right-angle.svg";

function HierarchySection() {
  return (
    <div className="flex items-center mb-14 gap-0 mt-16 self-start max-md:max-w-full max-md:flex-wrap max-md:mt-10">
      <img src={HomeIcon} />
      <img src={RightAngleIcon} />
      <h3 className="text-zinc-500 text-center text-lg font-medium">
        Flashcard
      </h3>
      <img src={RightAngleIcon} />
      <h3 className="text-zinc-500 text-center text-lg font-medium">
        Mathematics
      </h3>
      <img src={RightAngleIcon} />
      <h1 className="text-blue-950 text-center text-lg font-semibold">
        Relation and Function
      </h1>
    </div>
  );
}
export default HierarchySection;
