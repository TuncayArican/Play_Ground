import logo from './logo.svg';
import React, {useEffect, useState} from "react";
import axios from 'axios';
import ProductItem from "./components/Product/ProductItem"
import './App.css';
function App() {
  //     okuma     yazma
  const [products, setProducts] = useState([])
  useEffect(()=>{
    axios.get('https://fakestoreapi.com/products').then(({data})=>{
      console.log("nasılsın", data)
      setProducts(data)
    })
    // const {data} = await axios.get('https://fakestoreapi.com/products')
    // console.log("naber", data)
  }, [])
  return (
    <div className="App">
      {products.map((osman) =>
      <>
        <ProductItem
          ahmet={osman}
        />
        </>
      )}
    </div>
  );
}
export default App;