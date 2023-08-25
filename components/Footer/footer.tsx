import { FooterProps } from "./footer.props";
import styles from './footer.module.css'


export default function Footer({ children, ...props }: FooterProps): JSX.Element {
  return (
    <footer
      {...props}
    >
      <span>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nostrum, vel?</span>
      <a href="#" className={styles.footerlink}>Пользовательское соглашение</a>
      <a href="#" className={styles.footerlink}>Политика конфиденциальности</a>
    </footer>
  );
}
