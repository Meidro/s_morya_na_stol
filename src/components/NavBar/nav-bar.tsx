import styles from './nav-bar.module.css';
import {FaHome, FaTh, FaSearch, FaRegUser} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';

export const NavBar = () => {
   return (
      <div className={styles.wrapper}>
         <div className='container'>
            <ul className={styles.menuList}>
               <li>
                  <NavLink
                     className={({isActive}) => {
                        return isActive ? styles.linkItem + ' ' + styles.active : styles.linkItem;
                     }}
                     to={'/'}
                  >
                     <FaHome />
                     <span>Главная</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({isActive}) => {
                        return isActive ? styles.linkItem + ' ' + styles.active : styles.linkItem;
                     }}
                     to={'/catalog'}
                  >
                     <FaTh />
                     <span>Каталог</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({isActive}) => {
                        return isActive ? styles.linkItem + ' ' + styles.active : styles.linkItem;
                     }}
                     to={'/search'}
                  >
                     <FaSearch />
                     <span>Поиск</span>
                  </NavLink>
               </li>
               <li>
                  <NavLink
                     className={({isActive}) => {
                        return isActive ? styles.linkItem + ' ' + styles.active : styles.linkItem;
                     }}
                     to={'/profile'}
                  >
                     <FaRegUser />
                     <span>Профиль</span>
                  </NavLink>
               </li>
            </ul>
         </div>
      </div>
   );
};
