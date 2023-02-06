import {Search} from '../SearchTop/search-top';
import styles from './home.module.css';

export const Home = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.header}>
            <div className='container'>
               <Search />
            </div>
         </div>
      </div>
   );
};
