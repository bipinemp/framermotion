"use client";

import { createContext, useContext, Dispatch, SetStateAction } from "react";

interface NavContextProps {
  navMenu: boolean;
  setNavMenu: Dispatch<SetStateAction<boolean>>;
}

export const NavContext = createContext<NavContextProps>({
  navMenu: false,
  setNavMenu: () => {},
});

export const useModalContext = () => useContext(NavContext);
