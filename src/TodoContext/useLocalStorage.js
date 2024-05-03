import React from "react";

function useLocalStorage(itemName, initialValue) {
  const [item, setItem] = React.useState(initialValue);

  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false)

  React.useEffect(() => {
    setTimeout(() => {
      try {
        const localStorageItem = localStorage.getItem(itemName);
        let parsedItem;
  
        if (localStorageItem) {
          parsedItem = JSON.parse(localStorageItem);
          setItem(parsedItem);
        } else {
          localStorage.setItem(itemName, JSON.stringify(initialValue))
          parsedItem = initialValue;
        }
  
        setLoading(false);
      } catch(error) {
        setError(true);
        setLoading(false);
      }
    }, 2000);
  }, [itemName, initialValue]);

  const saveItem = (newItem) => {
    setItem(newItem)
    localStorage.setItem("todos_v1", JSON.stringify(newItem))
  };

  return {
    item, saveItem, loading, error
  };
}

export { useLocalStorage };