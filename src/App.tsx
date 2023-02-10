import {Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import {Catalog} from './pages/Catalog/catalog';
import {Home} from './pages/Home/home';
import {NavBar} from './components/NavBar/nav-bar';

export const App = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/catalog' element={<Catalog />} />
            </Routes>
         </div>
         <NavBar />
      </div>
   );
};
