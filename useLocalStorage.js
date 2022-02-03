const useLocalStorage = (key = "", initialValue = "") => {
  const [state, setState] = useState(() => {
    try {
      const item = window.localStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setLocalStorageState = (newState) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.localStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in localStorage.`);
    }
  };

  return [state, setLocalStorageState];
};

export default useLocalStorage;

//In the component, destructure the state and setting function

//const defaultSettings = {
// notifications:'weekly',
// }

// const [appSettings, setAppSettings] = useLocalStorage('app-settings', defaultSettings)

//Passing a function like the below example
//onChange={e => setAppSettings(settings => ({
// ...settings,
// notifications: e.target.value
// }))
// }