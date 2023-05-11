
import styles from './Rating.module.css';
import { RatingProps } from './Rating.props';
import cn from 'classnames';
import StarIcon from './star.svg';
import { useEffect, useState, KeyboardEvent } from 'react';
 


export const Rating = ({ isEditable = false, rating, setRating,  ...props}: RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));
  
  useEffect( () => {
    constructRating(rating);
  }, [rating]);

  const constructRating = (currentRating: number) => {
    const updatedArray = ratingArray.map( (r:JSX.Element, i: number) => {
      return (
        <span
          className={
            cn(styles.star, {
              [styles.filled]: i < currentRating,
              [styles.editable]: isEditable,
            })
          }
          onMouseEnter={ () => changeDisplay(i + 1)}
          onMouseLeave={ () => changeDisplay(rating)}
          onClick={ () => {
            onclick(i + 1)
          }}
        >
          <StarIcon 
            
            tabIndex={isEditable ? 0 : -1}
            onKeyDown={ (e: KeyboardEvent<SVGElement>) => {
              if (isEditable && e.code === 'Space' && setRating) {
                setRating(i + 1);
              }
              
            }}
          />
        </span>
      );
    });
    setRatingArray(updatedArray);
  };

  const changeDisplay = (i: number) => {
    if (isEditable) {
      constructRating(i);
    }
  }

  const onclick = (i: number) => {
    if (isEditable && setRating) {
      setRating(i)
    }
  }

  return (
    <div {...props}>
      {ratingArray.map( (r, i) => (<span key={i}>{r}</span>))}
    </div>
  );
}