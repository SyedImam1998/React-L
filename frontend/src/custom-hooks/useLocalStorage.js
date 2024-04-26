const useLocalStorage = () => {
  const getLocalStorage = (key) => {
   return  localStorage.getItem(key);
  };
  const setLocalStroage = (key, value) => {
    localStorage.setItem(key, value);
  };
  return [getLocalStorage, setLocalStroage];
};

export default useLocalStorage;
