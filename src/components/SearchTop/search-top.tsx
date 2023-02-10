import {FaSearch} from 'react-icons/fa';
import styles from './search-top.module.css';

export const SearchTop = () => {
   return (
      <label className={styles.wrapper}>
         <input className={styles.input} placeholder='Поиск в С моря на стол' type='text' />
         <span className={styles.search}>
            <FaSearch color='#ffffff' />
         </span>
      </label>
   );
};
