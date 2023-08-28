'use client';

import { useEffect, useState, KeyboardEvent } from 'react';
import { RatingProps } from './Rating.props';
import StarSvg from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = ({className, isEditable = false, setRating, rating, ...props}: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const changeDisplay = (n: number) => {
    if (!isEditable) {
      return ;
    }
    constructRating(n);
  };

  const handleClick = (n: number) => {
    if (!isEditable || !setRating) {
      return ;
    }
    setRating(n);
  };

  const handleSpace = (n: number, e: KeyboardEvent) => {
    if (e.code != 'Space' || !setRating) {
      return ;
    }
    setRating(n);
  };

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span 
          className={styles.wrapper}
          onMouseEnter={ () => { changeDisplay(i + 1) } }
          onMouseLeave={ () => { changeDisplay(rating) } }
          onClick={ () => { handleClick(i+1) }}
        >
          <StarSvg
            className={cn({
              [styles.base]: i >= currentRating,
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            tabIndex={ isEditable ? 0 : -1 }
            onKeyDown={ (e: KeyboardEvent) => {
              if (isEditable) {
                handleSpace(i + 1, e)
              }
            }}
          />
        </span>
        );
    });
    setRatingArray(updatedArray);
  };


  useEffect(() => {
    constructRating(rating);
  }, [rating]);

  return (
    <div
      className={ cn(className) }
      {...props}
    >
      { ratingArray.map((r, i) => <span key={i}>{r}</span> ) }
    </div>
  );
};