
import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MyAppContext } from '../../context/app.context';

import Courses from './icons/courses.svg';
import Services from './icons/services.svg';
import Books from './icons/books.svg';
import Products from './icons/goods.svg';
import { FirstLevelMenuItem } from '../../interfaces/menu.interface';
import { TopLevelCategory } from '../../interfaces/page.interface';

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <Courses />,
    id: TopLevelCategory.Courses
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <Services />,
    id: TopLevelCategory.Services
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <Books />,
    id: TopLevelCategory.Books
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <Products />,
    id: TopLevelCategory.Products
  },
];


export const Menu = (): JSX.Element => {

  const { menu , setMenu, firstCategory} = useContext(MyAppContext);

  return (
   <div>
    <Courses />
    <Services />
    <Books />
    <Products />
      <ul>
        { menu.map( (m) => (<li key={m._id.secondCategory}>
          {m._id.secondCategory}
        </li>))}
      </ul>
   </div>
  );
}