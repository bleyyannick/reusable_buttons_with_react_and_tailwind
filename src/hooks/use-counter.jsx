
import { useState, useEffect } from 'react';

function useCounter(value) {
    const [count, setCount] = useState(value); 

  useEffect(() => {
    console.log(count)
  }, [count])

  const handleClick = ()=> {
    setCount(count + 1); 
  }
  return {
    count, 
    handleClick
  }
}

export default useCounter; 