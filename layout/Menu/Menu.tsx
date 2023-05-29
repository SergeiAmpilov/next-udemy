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
import Link from 'next/link';
import { useRouter } from 'next/router';

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
  const router = useRouter();

  const openSecondLevel = (secondCategory: string) => {
    setMenu && setMenu(menu.map(m => {
      console.log(m, secondCategory );
      if (m._id.secondCategory == secondCategory) {
        m.isOpened = !m.isOpened;
      }
      return m;
    }));
  };  

  const buildFirstLevel = () => {
    return (
      <>
        { firstLevelMenu.map( (m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
                <div className={cn(styles.firstLevel, {
                  [styles.firstLevelActive]: m.id === firstCategory,
                })}>
                  {m.icon}
                  <span>{m.name}</span>
                </div>
            </Link>
            { m.id === firstCategory && buildSecondLevel(m) }
          </div>
        ) ) }
      </>
    );
  };

  const buildSecondLevel = (menuItem: FirstLevelMenuItem) => {
    return (
      <div className={styles.secondBlock}>
        { menu.map((m) => {
          if (m.pages.map( p => p.alias).includes(router.asPath.split('/')[2])) {
            m.isOpened = true;
          }

          return (
            <div key={m._id.secondCategory}>
              <div className={styles.secondLevel} onClick={() => {
                openSecondLevel(m._id.secondCategory)
                }}>
                { m._id.secondCategory }
              </div>
              <div className={cn(styles.secondLevelBlock, {
                [styles.secondLevelBlockOpened]: m.isOpened
              })}>
                { buildThirdLevel(m.pages, menuItem.route) }
              </div>
            </div>
          );
        }) }
      </div>
    );
  };
  
  const buildThirdLevel = (pages: PageItem[], route: string) => {
    return (
      <>
        {
          pages.map( (p) => (
            <Link
              key={p._id}
              href={`/${route}/${p.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${p.alias}` === router.asPath
              })}
            >
              {p.category}
            </Link>
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