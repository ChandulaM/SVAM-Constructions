import React from "react";

const Header = ({ name }) => {
  return (
    <div
      className="flex flex-1 h-20 bg-yellow-400 justify-between items-center"
      title="header"
    >
      <p className="font-sans font-normal text-2xl ml-10">{name}</p>
      <p className="font-sans font-bold text-4xl mr-10 tracking-wider">
        SVAM Constructions
      </p>
    </div>
  );
};

export default Header;
