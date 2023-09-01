import { MenuItem } from "@/interfaces/menu.interface";
import { TopLevelCategory } from "@/interfaces/top-page.interface";
import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category?: TopLevelCategory;
  menu: MenuItem[];
}