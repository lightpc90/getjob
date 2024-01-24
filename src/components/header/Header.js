import React from "react";
import Intro from "./Intro";
import Intro2 from "./Intro2";


const Header = () => {
  return (
    <div className="mb-[200px] relative flex justify-center">
      <div className="absolute right-0 top-[220px] left-0">
        <Intro2 />
      </div>
      <div className="z-10">
        <Intro />
      </div>
    </div>
  );
};

export default Header;
