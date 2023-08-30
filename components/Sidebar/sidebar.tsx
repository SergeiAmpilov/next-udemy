import { SidebarProps } from "./sidebar.props";
import styles from './sidebar.module.css';
import { Menu } from "../Menu/menu";
import { TopLevelCategory } from "@/interfaces/top-page.interface";



export default function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  
  return (
      <div
        {...props}
      >
        <Menu category={TopLevelCategory.Courses} />
        {children }
      </div>
  );
}
