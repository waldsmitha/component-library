const useSessionStorage = (key = "", initialValue = "") => {
  const [state, setState] = useState(() => {
    try {
      const item = window.sessionStorage.getItem(key);
      return item ? JSON.parse(item) : initialValue;
    } catch (error) {
      return initialValue;
    }
  });

  const setSessionStorageState = (newState) => {
    try {
      const newStateValue =
        typeof newState === "function" ? newState(state) : newState;
      setState(newStateValue);
      window.sessionStorage.setItem(key, JSON.stringify(newStateValue));
    } catch (error) {
      console.error(`Unable to store new value for ${key} in sessionStorage.`);
    }
  };

  return [state, setSessionStorageState];
};

export default useSessionStorage;

//In the component, destructure the state and setting function

//const defaultSettings = {
// notifications:'weekly',
// }

// const [appSettings, setAppSettings] = useSessionStorage('app-settings', defaultSettings)

//Passing a function like the below example
//onChange={e => setAppSettings(settings => ({
// ...settings,
// notifications: e.target.value
// }))
// }
