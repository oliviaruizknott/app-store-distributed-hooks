import { useState, useEffect } from "react";

export const useGetValue = (stateKey, defaultValue = null) => {
  const store = window._store;
  const [value, setValue] = useState(store.get(stateKey) || defaultValue);

  useEffect(() => {
    store.addListener({
      storeUpdated: (k, v) => k === stateKey && setValue(v),
    });
  }, []);

  return value;
};

export const setValue = (key, value, broadcast = true) => {
  console.log("setValue", key, value, broadcast);
  window._store.set(key, value, broadcast);
};
