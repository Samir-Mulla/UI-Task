import React from "react";

function FeaturesSection() {
  return (
    <>
      <div className="flex mt-14 justify-center mb-12 flex-wrap">
        <h3 className="text-blue-950 lg:text-2xl font-bold mr-8">
          <div> Study</div>
          <div className="w-full h-[3px] mt-2 bg-blue-950 rounded-full"></div>
        </h3>
        <h3 className="text-zinc-500 lg:text-2xl font-medium whitespace-nowrap mx-8">
          Quiz
        </h3>
        <h3 className="text-zinc-500 lg:text-2xl  font-medium whitespace-nowrap mx-8">
          Test
        </h3>
        <h3 className="text-zinc-500 lg:text-2xl  font-medium whitespace-nowrap mx-8">
          {" "}
          Game
        </h3>
        <h3 className="text-zinc-500 lg:text-2xl  font-medium whitespace-nowrap mx-8">
          Others
        </h3>
      </div>
    </>
  );
}
export default FeaturesSection;
