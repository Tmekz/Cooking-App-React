import { useEffect, useState } from "react";
import Card from "./Components/Card";
import axios from "axios";

function App() {
  const [inputSearch, setInputSearch] = useState([]);
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://www.themealdb.com/api/json/v1/1/search.php?s=" + inputSearch
      )
      .then((res) => setData(res.data.meals));
  }, [inputSearch]);

  return (
    <div className="app-container">
      <h1>React Cooking APP</h1>
      <input
        type="text"
        placeholder="Tapez le nom d'un aliment (en Anglais)"
        onChange={(e) => setInputSearch(e.target.value)}
      />

      <div className="meals-container">
        {data &&
          data
            .slice(0, 24)
            .map((meal) => <Card key={meal.idMeal} meale={meal} />)}
      </div>
    </div>
  );
}

export default App;
