import React from 'react';


const Contador = ({ inicial, stock, count, setCount}) => {
  
  const add = () => {
    if (count === stock) {
      setCount(count);
    } else {
      setCount(count + 1);
    }
  };
  const min = () => {
  if (count === inicial){
   setCount (count);
  } else {
    setCount(count - 1)
  };
}

  return (
    <div className="contador">
      <button className="btn" onClick={min}> - </button>
      <p>{count}</p>
      <button className="btn" onClick={add}> + </button>
    </div>
  );
};

export default Contador;