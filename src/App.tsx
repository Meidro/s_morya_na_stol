import {Route, Routes} from 'react-router-dom';
import styles from './App.module.css';
import {Catalog} from './components/Catalog/catalog';
import {Home} from './components/Home/home';
import {NavBar} from './components/NavBar/nav-bar';

export const App = () => {
   return (
      <div className={styles.wrapper}>
         <div className={styles.content}>
            <Routes>
               <Route path='/' element={<Home />} />
               <Route path='/catalog' element={<Catalog />} />
               {/* <Route path='/' element={}/>
               <Route path='/' element={}/> */}
            </Routes>
         </div>
         <NavBar />
      </div>
   );
};
