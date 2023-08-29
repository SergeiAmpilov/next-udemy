'use client';

import { SidebarProps } from "./sidebar.props";
import styles from './sidebar.module.css';
import { createContext } from "react";

const SidebarContext = createContext({});


export default function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  return (
    <SidebarContext.Provider value={{}}>
      <div
        {...props}
      >
        Sidebar
        {children }
      </div>
    </SidebarContext.Provider>
  );
}
