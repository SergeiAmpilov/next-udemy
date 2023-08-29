import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";

export interface MenuProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  category?: number
}