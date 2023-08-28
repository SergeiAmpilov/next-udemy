import { SidebarProps } from "./sidebar.props";
// import styles from './sidebar.module.css'


export default function Sidebar({ children, ...props }: SidebarProps): JSX.Element {
  return (
    <div
      {...props}
    >
      Sidebar
      {children }
    </div>
  );
}
