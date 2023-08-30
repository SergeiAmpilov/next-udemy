import { getMenu } from "@/api/menu";
import { MenuProps } from "./Menu.props";
import cn from 'classnames';
import styles from './Menu.module.css';
import { FirstLevelMenuItem, MenuItem } from "@/interfaces/menu.interface";
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
  
  return (
    <div
      className={cn(className)}
      {...props}
    >
      <ul>
        { 
          menu.map((m, i) => (<li key={i}>{m._id.secondCategory}</li>)) 
        }
      </ul>
    </div>
  );

}