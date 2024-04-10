import React from "react";
import "./TodoSearch.css"

function TodoSearch() {
  // Este es el estado
  const [searchValue, setSearchValue] = React.useState("");

  console.log("los usuarios buscan todos de: " + searchValue);

  return (
    <input className="TodoSearch" type="text" placeholder="Cortar cebolla" 
    value={searchValue}
    onChange={(event) => {
      console.log(event);
      console.log(event.target.value);
      setSearchValue(event.target.value);
    }} />
  );
}

export { TodoSearch };