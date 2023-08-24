import { FooterProps } from "./footer.props";
import styles from './footer.module.css'


export default function Footer({ children, ...props }: FooterProps): JSX.Element {
  return (
    <footer
      {...props}
    >
      Footer
      {children}
    </footer>
  );
}
