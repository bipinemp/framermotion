import React from "react";

const Logo = () => {
  return (
    <div className="flex items-center justify-center gap-4">
      <span className="flex h-8 w-8 rotate-45 items-center justify-center rounded-md bg-primary font-gems text-2xl text-bg-dark">
        <p className="-rotate-45 p-4">X</p>
      </span>
      <h1 className="hidden font-gems sm:block lg:text-2xl">NXN</h1>
    </div>
  );
};

export default Logo;
