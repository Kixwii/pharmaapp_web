import { useState, useMemo } from 'react';

const useCounterStore = () => {
  const [count, setCount] = useState(0);

  const doubleCount = useMemo(() => count * 2, [count]);

  const increment = () => {
    setCount((prevCount) => prevCount + 1);
  };

  return { count, doubleCount, increment };
};

export default useCounterStore;
