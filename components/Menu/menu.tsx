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

export async function Menu({ category = 0, className, ...props }: MenuProps): Promise<JSX.Element> {

  const menu: MenuItem[] = await getMenu(category);
  
  const buildFirstLevel = (): JSX.Element => {
    return (
      <>
        { firstLevelMenu.map((m) => (
          <div key={m.route}>
            <a href={`/${m.route}`}>
              <div className={cn(styles.firstLevel, {
                [styles.firstLevelActive]: m.id == category,
              })}>
                {m.icon}
                <span>{m.name}</span>
              </div>
            </a>
            { m.id == category && buildSecondLevel(m) }
          </div>          
        )) }
      </>
    );
  }

  const buildSecondLevel = (menuFirst: FirstLevelMenuItem): JSX.Element => {
    return (
      <div>
        { menu.map((m) => (
          <div key={m._id.secondCategory}>
            <div className={styles.secondLevel}>
              {m._id.secondCategory}
            </div>
            <div className={cn(styles.secondLevelBlock, {
              [styles.secondLevelBlockOpened]: m.isOpened,
            })}>
              { buildThirdLevel(m.pages, menuFirst.route) }
            </div>
          </div>
        ))}
      </div>
    );
  }

  const buildThirdLevel = (pages: PageItem[], route: string): JSX.Element => {
    return (
      <>
        { pages.map(page => (
          <div>
            <a  key={page._id} 
                href={`/${route}/${page.alias}`}
                className={cn(styles.thirdLevel, {
                  [styles.thirdLevelActive]: true
                })}
            >
              {page.category}
            </a>
          </div>
        ))}
      </>
    );
  }

  return (
    <div
      className={cn(className)}
      {...props}
    >
      { buildFirstLevel() }
    </div>
  );

}