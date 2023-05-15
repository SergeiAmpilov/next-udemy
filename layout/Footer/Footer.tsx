
import styles from './Footer.module.css';
import { FooterProps } from './Footer.props';
import cn from 'classnames';


export const Footer = ({ ...props }: FooterProps): JSX.Element => {

  return (
    <div
      {...props}
    >
      <div className={styles.wrapper}>
        <div className={styles.copyright}>
          Owl c 2020-2021 Все права защищены
        </div>
        <a href="#" className={styles.agreement}>Пользовательское соглашение</a>
        <a href="#" className={styles.confident}>Политика конфиденциальности</a>
      </div>
    </div>

  );
}