import { ButtonHTMLAttributes, DetailedHTMLProps, HTMLAttributes, ReactNode } from "react";


export interface ButtonProps 
  extends DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement> {
  children: ReactNode;
  appearance: 'primary' | 'ghost';
}

/*
export interface ParagrapfProps extends DetailedHTMLProps<HTMLAttributes<HTMLParagraphElement>, HTMLParagraphElement> {}
*/