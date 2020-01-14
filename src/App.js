import "./App.css";
import React, { useEffect, useState } from "react";
import Recipe from "./Recipe";

function App() {
  let [recipes, setRecipes] = useState([]);
  let [search, setSearch] = useState("");
  let [query, setQuery] = useState("chicken");

  const APP_ID = "6f584901";
  const APP_KEY = "22ae3238c775e83bd9c2fc72fe4caad9	";
  const getRecipes = async () => {
    try {
      const response = await fetch(
        `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`
      );
      const data = await response.json();
      setRecipes(data.hits);
      console.log(data.hits);
    } catch (err) {
      console.log(err.data + " hop");
    }
  };
  useEffect(() => {
    getRecipes();
  }, [query]);
  function getSearch(e) {
    e.preventDefault();
    setQuery(search);
    setSearch("");
  }
  function updateSearch(e) {
    setSearch(e.target.value);
  }
  return (
    <div className="App">
      <form onSubmit={getSearch}>
        <input type="text" value={search} onChange={updateSearch} />
        <button type="submit">search</button>
      </form>
      {recipes.map((recipe, index) => (
        <Recipe key={index} recipe={recipe.recipe} />
      ))}
    </div>
  );
}

export default App;


// johnN7 51658848  mrgreenpresson@mail.ru