import { FooterProps } from "./footer.props";
import styles from './footer.module.css';
import cn from 'classnames';


export default function Footer({ className, children, ...props }: FooterProps): JSX.Element {
  return (
    <footer
      className={cn(className, styles.footer)}
      {...props}
    >
      <span>
        OwlTop © 2020 - {new Date().getFullYear()} Все права защищены  
      </span>
      <a href="#" className={styles.footerlink}>Пользовательское соглашение</a>
      <a href="#" className={styles.footerlink}>Политика конфиденциальности</a>
    </footer>
  );
}
