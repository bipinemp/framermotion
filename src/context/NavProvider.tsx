"use client";

import { useState } from "react";
import { NavContext } from "./NavContext";

interface ModalProviderProps {
  children: React.ReactNode;
}

const NavProvider: React.FC<ModalProviderProps> = ({ children }) => {
  const [navMenu, setNavMenu] = useState(false);

  return (
    <NavContext.Provider value={{ navMenu, setNavMenu }}>
      {children}
    </NavContext.Provider>
  );
};

export default NavProvider;
