'use client'

import { getMenu } from "@/api/menu";
import { MenuProps } from "./Menu.props";
import cn from 'classnames';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/interfaces/menu.interface";
import CoursesIcon from './icons/courses.svg';
import ServicesIcon from './icons/services.svg';
import BooksIcon from './icons/books.svg';
import ProductsIcon from './icons/product.svg';
import { TopLevelCategory } from "@/interfaces/top-page.interface";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";

const firstLevelMenu: FirstLevelMenuItem[] = [
  {
    route: 'courses',
    name: 'Курсы',
    icon: <CoursesIcon />,
    id: TopLevelCategory.Courses
  },
  {
    route: 'services',
    name: 'Сервисы',
    icon: <ServicesIcon />,
    id: TopLevelCategory.Services
  },
  {
    route: 'books',
    name: 'Книги',
    icon: <BooksIcon />,
    id: TopLevelCategory.Books
  },
  {
    route: 'products',
    name: 'Товары',
    icon: <ProductsIcon />,
    id: TopLevelCategory.Products
  },
];

export function Menu({serverMenu, category = 0, className, ...props }: MenuProps): JSX.Element {


  const [menu, setMenu ] = useState(serverMenu);
  const pathName = usePathname();

  const openSecondLevel = (secondCategory: string) => {
    setMenu(
      menu.map(m => {
        if (m._id.secondCategory == secondCategory) {
          m.isOpened = !m.isOpened;
        }

        return m;
      })
    )
  };
  
  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        { firstLevelMenu.map((m) => (
          <div key={m.route}>
            <Link href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == category,
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </Link>
            { m.id == category && buildSecondLevel(m) }
          </div>          
        )) }
      </>
    );
  }

  const buildSecondLevel = (menuFirst: FirstLevelMenuItem): JSX.Element => {
    return (
      <div>
        { menu.map((m, i) => { return (
          <div key={m._id.secondCategory} className={styles.seconsBlock}>
            <div className={styles.secondLevel} onClick={() => openSecondLevel(m._id.secondCategory) }>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.pages.map(p => p.alias).includes(pathName.split('/')[2]),
            })}>
              { buildThirdLevel(m.pages, menuFirst.route) }
            </div>
          </div>
        )})}
      </div>
    );
  }

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
    return (
      <>
        { pages.map(page => (
          <div key={page._id}>
            <Link              
              href={`/${route}/${page.alias}`}
              className={cn(styles.thirdLevel, {
                [styles.thirdLevelActive]: `/${route}/${page.alias}` == pathName
              })}
            >
              {page.category}
            </Link>
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      className={cn(styles.menu, className)}
      {...props}
    >
      { buildFirstLevel() }
    </div>
  );

}