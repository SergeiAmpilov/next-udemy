import { SidebarProps } from "./sidebar.props";
import styles from './sidebar.module.css';
import { Menu } from "../Menu/menu";
import { TopLevelCategory } from "@/interfaces/top-page.interface";
import { MenuItem } from "@/interfaces/menu.interface";
import { getMenu } from "@/api/menu";



export default async function Sidebar({ children, ...props }: SidebarProps): Promise<JSX.Element> {

  const menu: MenuItem[] = await getMenu(TopLevelCategory.Courses);
  
  return (
      <div
        {...props}
      >
        <Menu 
          category={TopLevelCategory.Courses} 
          serverMenu={menu}
        />
        {children }
      </div>
  );
}
