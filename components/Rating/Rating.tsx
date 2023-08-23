'use client'

import { useEffect, useState } from 'react';
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

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (        
          <StarSvg
            className={cn(styles.star, {
              [styles.base]: i >= currentRating,
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })}
            onMouseEnter={ () => { changeDisplay(i + 1) } }
            onMouseLeave={ () => { changeDisplay(rating) } }
          />        
        );
    });
    setRatingArray(updatedArray)
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
}