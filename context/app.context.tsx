import { ReactNode, createContext, useState, PropsWithChildren } from "react";
import { MenuItem } from "../interfaces/menu.interface";
import { TopLevelCategory } from "../interfaces/page.interface";
// import { AppContext } from "next/app";

export interface IAppContext {
  menu: MenuItem[];
  firstCategory: TopLevelCategory;
  setMenu?: (newMenu: MenuItem[]) => void;
}

export const MyAppContext = createContext<IAppContext>({
  menu: [],
  firstCategory: TopLevelCategory.Courses
});


export const MyAppContextProvider = ({menu, firstCategory, children}: PropsWithChildren<IAppContext>) => {

  const [menuState, setMenuState] = useState<MenuItem[]>(menu);
  const setMenu = (newMenu: MenuItem[]) => {
    setMenuState(newMenu);
  };


  return <MyAppContext.Provider value={{menu: menuState, firstCategory}}>
    {children}
  </MyAppContext.Provider>;
};