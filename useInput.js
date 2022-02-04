import { useState, useEffect } from "react";

const useInput = (state) => {
  const [value, setValue] = useState(state);

  const onChangeHandler = (e) => {
    setValue(e.target.value);
  };

  return [value, onChangeHandler];
};
