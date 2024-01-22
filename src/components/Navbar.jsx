import React from "react";
import LogoIcon from "./LogoIcon";
import NavigationLinks from "./NavigationLinks";

function Navbar() {
  return (
    <>
      <div className="flex justify-between flex-wrap mt-5 mb-14 w-full items-center gap-5 ">
        <LogoIcon />
        <NavigationLinks />
      </div>
    </>
  );
}

export default Navbar;
