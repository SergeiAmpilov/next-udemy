'use client'

import { MenuProps } from "./Menu.props";
import cn from 'classnames';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, MenuItem, PageItem } from "@/interfaces/menu.interface";

import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import { useState } from "react";
import { firstLevelMenu } from "@/helpers/helpers";



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
              // [styles.secondLevelBlockOpened]: m.pages.map(p => p.alias).includes(pathName.split('/')[2]),
              [styles.secondLevelBlockOpened]: true,
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