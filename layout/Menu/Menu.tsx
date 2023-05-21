
import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MyAppContext } from '../../context/app.context';

import Courses from './icons/courses.svg';
import Services from './icons/services.svg';
import Books from './icons/books.svg';
import Goods from './icons/goods.svg';


export const Menu = (): JSX.Element => {

  const { menu , setMenu, firstCategory} = useContext(MyAppContext);

  return (
   <div>
    <Courses />
    <Services />
    <Books />
    <Goods />
      <ul>
        { menu.map( (m) => (<li key={m._id.secondCategory}>
          {m._id.secondCategory}
        </li>))}
      </ul>
   </div>
  );
}