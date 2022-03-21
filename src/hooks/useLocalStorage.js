import { useState } from 'react';

export const useLocalStorage = (key, initialValue) => {
  const getLocalStorage = () => {
    const item = localStorage.getItem(key);
    const validItem = item ? JSON.parse(item) : initialValue;
    return validItem;
  };

  const [storageItem, setStorageItem] = useState(() => getLocalStorage());

  const setLocalStorage = (value) => {
    if (!value) return;
    localStorage.setItem(key, JSON.stringify(value));
    setStorageItem(value);
  };

  return [storageItem, setLocalStorage];
};
