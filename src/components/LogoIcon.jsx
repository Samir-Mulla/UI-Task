import React from "react";
import Logo from "/logo.svg";

function LogoIcon() {
  return (
    <img
      loading="lazy"
      srcSet={Logo}
      alt="logo"
      className="aspect-[4.9] object-contain object-center w-[191px] overflow-hidden shrink-0 max-w-full my-auto"
    />
  );
}
export default LogoIcon;
