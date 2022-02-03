const useToggle = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);

  const toggleValue = (value) => {
    setValue((currentValue) =>
      typeof value === "boolean" ? value : !currentValue
    );
  };

  return [value, toggleValue];
};

//Use case

// const [value, toggleValue] = useToggle(false);

// <button onClick={toggleValue}>Toggle</button>;
// <button onClick={()=> toggleValue(true)}>Make True</button>;
// <button onClick={()=> toggleValue(false)}>Make False</button>;
