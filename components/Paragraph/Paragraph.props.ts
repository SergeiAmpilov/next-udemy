import { DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ParagrapfProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {
  fontSize?: 's' | 'm' | 'l';
  children: ReactNode;

}
