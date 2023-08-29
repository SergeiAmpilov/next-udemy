import { SidebarProps } from "./sidebar.props";
import styles from './sidebar.module.css';
import { Menu } from "../Menu/menu";



export default function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  return (
      <div
        {...props}
      >
        <Menu />
        {children }
      </div>
  );
}
