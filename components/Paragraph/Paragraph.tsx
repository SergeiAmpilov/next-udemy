
import styles from './Paragraph.module.css';
import { ParagrapfProps } from './Paragraph.props';
import cn from 'classnames';


export const Paragraph = ({ children, fontSize='m', ...props}: ParagrapfProps): JSX.Element => {

  return (
    <p
      className={cn(styles.p, {
        [styles.s]: fontSize === 's',
        [styles.m]: fontSize === 'm',
        [styles.l]: fontSize === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
}