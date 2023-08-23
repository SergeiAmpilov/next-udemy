'use client'

import styles from './Button.module.css';
import { ButtonProps } from './Button.props';
import cn from 'classnames';

import ArrowImg from './arrow.svg';
import { useEffect, useState } from 'react';

export const Button = ({ appearance, arrow = 'none', children, className, ...props}: ButtonProps): JSX.Element => {

  const [counter, setCounter] = useState(0);
  useEffect(() => {
    console.log('init')
  })
  return (
    <button
      onClick={() => setCounter(counter + 1) }
      className={ cn(className, styles.button, {
        [styles.primary]: appearance === 'primary',
        [styles.ghost]: appearance === 'ghost',
      }) }
      {...props}
    >
      { counter }
      { children }
      { arrow !== 'none' && <span className={ cn(styles.arrow, {
        [styles.arrowright]: arrow == 'right',
        [styles.arrowdown]: arrow == 'down',
      }) }><ArrowImg /></span>}
    </button>
  );
};