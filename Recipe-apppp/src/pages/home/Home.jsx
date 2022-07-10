import axios from 'axios';
import React, {useState, useEffect} from 'react'
import Header from "../../components/header/Header";
import { ImgDiv, MainContainer,HomeImg } from './HomeStyles';
import homeSvg from '../../assets/home.svg'
import RecipeCardComp from "./RecipeCardComp"


const APP_ID = "4fa8fe6b";
const APP_KEY = "6820a8c76502e7c6b809426dd4de1a90";

const Home = () => {
  const [query, setQuery] = useState("");
  const [food, setFood] = useState();
  const mealTypes = ["Breakfast", "Lunch", "Dinner", "Snack", "Teatime"];
  const [meal, setMeal] = useState(mealTypes[0].toLowerCase());


  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${meal}`;

  const getData = async () => {
    if (query) {
      const result = await axios.get(url);
      setFood(result.data.hits);
      console.log(result.data.hits);
      //sadece result ı yazdırırsak bir sürü yabancı ifade gelecek, bizim esas istediğimiz data dizisi, result ın bir alt öğesi, dataya ulaşmak için result.data
      // data nın içinde hits ve more key i var, hits =bütün dizi toplu halde json olarak, 10 tane pie mesela. data 1 den 10 a kadar göster diyor, (daha fazla varsa bile ) more =true
    } else {
      console.log("please fill the form");
    }
  };



  return (
    <div>
      {/* alttakileri header a oradan da form a gönderiyorum, orada setMeal ve setQuery çalışacak setter a gönderiyorum yani */}
      {/* componente gidecekse tek kelime, style a gidecekse aç kapa 2 kelime */}
      <Header setQuery={setQuery}
      setMeal= {setMeal}
      getData = {getData}
      mealTypes={mealTypes}
      />

      {food ? (
        // api den gelen datanın tümü, (bir yiyecek ismi girildiğinde)
        <MainContainer>
          {/* arama sonucu yiyecek kartlarının kutusu */}
          {food.map((liste, index) => (
            <RecipeCardComp key={index} recipe1={liste.recipe} />
            // sadece liste yollarsak apı deki gibi  gidiyor. liste.recipe= json formatında key value. kısaca{recipe}.hits in içinde recipe var, liste hits e kadar gelir ben içindeki recipe'yi istiyorum
            // veriler direk bu sayfaya geliyor ,RecipeCardComp deki gibi navigate state e gerek yok
          ))}
        </MainContainer>
      ) : (
        <ImgDiv>
          <HomeImg src={homeSvg} />

          {/* ekrandaki aşçı resmi */}
        </ImgDiv>
      )}
    </div>
  );
}

export default Home