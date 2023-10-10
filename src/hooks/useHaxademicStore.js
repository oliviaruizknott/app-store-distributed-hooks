import { useState, useEffect } from "react";

export const useGetValue = (stateKey, defaultValue = null) => {
  const [value, setValue] = useState(_store.get(stateKey) || defaultValue);

  useEffect(() => {
    _store.addListener({
      storeUpdated: (k, v) => k === stateKey && setValue(v),
    });
  }, []);

  return value;
};

export const setValue = (key, value, broadcast = true) => {
  console.log("setValue", key, value, broadcast);
  _store.set(key, value, broadcast);
};
