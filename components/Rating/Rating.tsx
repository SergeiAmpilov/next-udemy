'use client'

import { useEffect, useState } from 'react';
import { RatingProps } from './Rating.props';
import StarSvg from './star.svg';
import cn from 'classnames';
import styles from './Rating.module.css';

export const Rating = ({className, isEditable = false, setRating, rating, ...props}: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map((r: JSX.Element, i: number) => {
      return (
        <span className={cn({
          [styles.base]: i >= rating,
          [styles.filled]: i < rating,
        })}>
          <StarSvg />
        </span>
        );
    })

    setRatingArray(updatedArray)
  };


  useEffect(() => {
    constructRating(rating);
  },[]);

  return (
    <div
      className={ cn(className) }
      {...props}
    >
      { ratingArray }
    </div>
  );
}