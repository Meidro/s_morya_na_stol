import {useState} from 'react';

export const App = () => {
   const [count, setCount] = useState(0);

   return (
      <div>
         <h1>{count}</h1>
         <button onClick={() => setCount((prev) => prev + 2)}>Плюс 1</button>
         <button onClick={() => setCount((prev) => prev - 2)}>Минус 1</button>
      </div>
   );
};
