import { useState } from "react";

const useArray = (defaultValue) => {
  const [array, setArray] = useState(defaultValue);

  const push = (element) => {
    setArray((a) => [...a, element]);
  };
  //onClick ={()=> push(7)}

  const filter = (callback) => {
    setArray((a) => a.filter(callback));
  };
  //onClick={()=> filter(n => n < 3)}
  //Filters numbers in array less than 4

  const update = (index, newElement) => {
    setArray((a) => [
      ...a.slice(0, index),
      newElement,
      ...a.slice(index + 1, a.length - 1),
    ]);
  };
  //onClick={() => update(1, 9)}
  //Changes second element to 9

  const remove = (index) => {
    setArray((a) => [
      ...a.slice(0, index),
      ...a.slice(index + 1, a.length - 1),
    ]);
  };
  //   onClick={() => remove(1)}
  //   Removes second element

  const clear = () => {
    setArray([]);
  };

  return { array, set: setArray, push, filter, update, remove, clear };
};

export default useArray;
