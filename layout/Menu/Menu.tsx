
import { useContext } from 'react';
import styles from './Menu.module.css';
import cn from 'classnames';
import { MyAppContext } from '../../context/app.context';


export const Menu = (): JSX.Element => {

  const { menu , setMenu, firstCategory} = useContext(MyAppContext);

  return (
   <div>
      <ul>
        { menu.map( (m) => (<li key={m._id.secondCategory}>
          {m._id.secondCategory}
        </li>))}
      </ul>
   </div>
  );
}