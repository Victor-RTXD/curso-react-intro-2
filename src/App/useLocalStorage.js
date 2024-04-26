import React from "react";

function useLocalStorage(itemName, initialValue) {
    const localStorageItem = localStorage.getItem(itemName);
    let parsedItem;
  
    if (localStorageItem) {
      parsedItem = JSON.parse(localStorageItem)
    } else {
      localStorage.setItem(itemName, JSON.stringify(initialValue))
      parsedItem = initialValue;
    }
  
    const [item, setItem] = React.useState(parsedItem);
  
    const saveItem = (newItem) => {
      setItem(newItem)
      localStorage.setItem("todos_v1", JSON.stringify(newItem))
    };
  
    return [item, saveItem]
}

export { useLocalStorage };