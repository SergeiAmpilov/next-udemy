
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';


export const Footer = ({ className, ...props }: FooterProps): JSX.Element => {

  return (
    <footer
      className={cn(className, styles.wrapper)}
      {...props}
    >
        <div className={styles.copyright}>
          Owl c 2020-{new Date().getFullYear()} Все права защищены
        </div>
        <a 
          href="#"
          target='_blank'>
            Пользовательское соглашение
        </a>
        <a 
          target='_blank' 
          href="#">
            Политика конфиденциальности
        </a>
      </footer>

  );
}