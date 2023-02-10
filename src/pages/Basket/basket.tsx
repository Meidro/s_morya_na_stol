import styles from './basket.module.css';

export const Basket = () => {
   return (
      <div className='container'>
         <div className={styles.basket}>
            <h3 className={styles.description}>Корзина С моря на стол</h3>
            <div className={styles.basket__body}>
               <p className={styles.basket__title}>Корзина пока пуста</p>
               <p className={styles.basket__subTitle}>Начните покупки с поиска товара в каталоге</p>
            </div>
         </div>
      </div>
   );
};
