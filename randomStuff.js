import { useState } from "react";

const data = [];

for (let i = 0; i < 10; i++) {
  data.push({
    number: i,
    id: "id" + i,
  });
}

//Create simple array i amount of times

//const state, array, etc., have some global variable
const [state, setState] = useState(data);

const deleteData = (id) => {
  const newData = state.filter((thing) => thing.id !== id);
  setState(newData);
};

function item({ id, number }) {
  return <h1 onClick={() => deleteData(id)}>{number}</h1>;
}
