import React, { createContext, ReactNode, useState } from "react";

interface iDarkModeContext {
  currentTheme: string;
  changeTheme: () => void;
}

interface iDarkProviderProps {
  children: ReactNode;
}

export const DarkModeContext = createContext({} as iDarkModeContext);

const DarkModeProvider = ({ children }: iDarkProviderProps) => {
  const [currentTheme, setCurrentTheme] = useState("light");

  const changeTheme = () => {
    currentTheme === "light"
      ? setCurrentTheme("dark")
      : setCurrentTheme("light");
  };

  return (
    <DarkModeContext.Provider value={{ currentTheme, changeTheme }}>
      {children}
    </DarkModeContext.Provider>
  );
};

export default DarkModeProvider;
