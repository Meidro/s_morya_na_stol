import {SearchTop} from '../../components/SearchTop/search-top';
import styles from './home.module.css';

export const Home = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.header}>
            <div className='container'>
               <SearchTop />
            </div>
         </div>
         <div className={styles.main}>
            <div className={styles.title}>Здесь позже будет главная страница</div>
         </div>
      </div>
   );
};
