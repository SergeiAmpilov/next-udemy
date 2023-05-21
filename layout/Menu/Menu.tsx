
import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MyAppContext } from '../../context/app.context';

import Courses from './icons/courses.svg';
import Services from './icons/services.svg';
import Books from './icons/books.svg';
import Products from './icons/goods.svg';
import { FirstLevelMenuItem, PageItem } from '../../interfaces/menu.interface';
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

  const buildFirstLevel = () => {
    return (
      <>
        { firstLevelMenu.map( (menu) => (
          <div key={menu.route}>
            <a href={`/${menu.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: menu.id === firstCategory,
              })}>
                {menu.icon}
                <span>{menu.name}</span>
              </div>
            </a>
            { menu.id === firstCategory && buildSecondLevel(menu) }
          </div>
        ) ) }
      </>
    );
  };
  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div>
        { menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              { m._id.secondCategory }
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened
            })}>
              { buildThirdLevel(m.pages, menuItem.route) }
            </div>
          </div>
        )) }
      </div>
    );
  };
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {
          pages.map( (p) => (
            <a 
              href={`/${route}/${p.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: true
              })}
            >{p.category}</a>
          ))
        }
      </>
    );
  };

  return (
   <div className={styles.menu}>
    { buildFirstLevel() }

   </div>
  );
}