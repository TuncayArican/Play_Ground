import {useState} from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../recipe/RecipeCard";


const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
const APP_ID = "4fa8fe6b";
const APP_KEY = "6820a8c76502e7c6b809426dd4de1a90";

const Main = () => {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());
  
// let navigate=useNavigate();
    // const moreClick=()=>{
    //     navigate("/details",{state:{recipes}})}

  
  const handleChange = (e) =>{
    setQuery(() => e.target.value);
}
console.log(query);

    const handleMeal = (e) =>{
        setMeal(e.target.value);
    }
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;
  const getData = async () => {
    if (query !== "") {
      const result = await axios.get(url);
      if (result.data.more) {
      }
      setRecipes(result.data.hits);
    }
  };


  return (
    <div style={{ marginTop: "5rem" }}>
      <input
        defaultValue={query}
        onChange={handleChange}
        type="text"
        name=""
        id=""
      />
      <button onClick={getData}>Search</button>
      <select name="" id="" onChange={handleMeal}>
        <option defaultValue="breakfast" selected>
          Breakfast
        </option>
        <option defaultValue="lunch">Lunch</option>
        <option defaultValue="dinner">Dinner</option>
        <option defaultValue="snack">Snack</option>
        <option defaultValue="teatime">Teatime</option>
      </select>
      <div className="d-flex flex-wrap">
        {recipes.map((recipe, index) => (
          <>
            <RecipeCard {...recipe} key={index} width={"200px"} />
          </>
        ))}
      </div>
    </div>
  );
};

export default Main;
