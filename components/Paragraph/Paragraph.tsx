
import styles from './Paragraph.module.css';
import { ParagrapfProps } from './Paragraph.props';
import cn from 'classnames';


export const Paragraph = ({ children, size='m', className, ...props}: ParagrapfProps): JSX.Element => {

  return (
    <p
      className={cn(className, styles.p, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.l]: size === 'l',
      })}
      {...props}
    >
      {children}
    </p>
  );
}