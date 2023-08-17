import { TagProps } from "./Tag.props";
import cn from 'classnames';
import styles from './Tag.module.css';

export const Tag = ({ color='ghost', size='s', className, href, children, ...props}: TagProps): JSX.Element => {
  return (
    <div
      className={ cn(className, styles.tag, {
        [styles.s]: size === 's',
        [styles.m]: size === 'm',
        [styles.ghost]: color === 'ghost',
        [styles.red]: color === 'red',
        [styles.gray]: color === 'gray',
        [styles.green]: color === 'green',
        [styles.primary]: color === 'primary',
      })}
      {...props}
    >
      { href 
        ? <a href={href}>{children}</a>
        : children
      }
      
    </div>
  );
}