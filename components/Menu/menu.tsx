import { getMenu } from "@/api/menu";
import { MenuProps } from "./Menu.props";
import cn from 'classnames';
import styles from './Menu.module.css';
import { MenuItem } from "@/interfaces/menu.interface";

export async function Menu({ category = 0, className, children, ...props }: MenuProps): Promise<JSX.Element> {

  const menu: MenuItem[] = await getMenu(category);

  console.log(menu);

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
      { children }
    </div>
  );

}