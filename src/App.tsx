import {Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import {Catalog} from './pages/Catalog/catalog';
import {Home} from './pages/Home/home';
import {NavBar} from './components/NavBar/nav-bar';
import {Search} from './pages/Search/search';
import {Profile} from './pages/Profile/profile';
import {Basket} from './pages/Basket/basket';

export const App = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/catalog' element={<Catalog />} />
               <Route path='/search' element={<Search />} />
               <Route path='/profile' element={<Profile />} />
               <Route path='/basket' element={<Basket />} />
            </Routes>
         </div>
         <NavBar />
      </div>
   );
};
