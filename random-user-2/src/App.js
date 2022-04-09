import './App.css';
import {useState, useEffect} from "react";
import axios from "axios";
import cw from "./assets/cw.svg";
import design from "./assets/design.svg";
import gman from "./assets/growing-up-man.svg";
import gwoman from "./assets/growing-up-woman.svg";
import mail from "./assets/mail.svg";
import man from "./assets/man.svg";
import map from "./assets/map.svg";
import padlock from "./assets/padlock.svg";
import phone from "./assets/phone.svg";
import woman from "./assets/woman.svg";

function App() {
 
  const [first, setFirst] = useState();
  const [last, setLast] = useState();
  const [picture, setPicture] = useState("");
  const [email, setEmail] = useState("");
  const [age, setAge] = useState("");
  const [location, setLocation] = useState("");
  const [tel, setTel] = useState("");
  const [password, setPassword] = useState("");
  const [gap, setGap] = useState("");
  const [blank, setBlank] = useState("");
  const [blank1, setBlank1] = useState("");
  const [gender, setGender] = useState("");
  const [user, setUser] = useState(false)


  const handleClick = (e) =>{
    console.log(e.target.className)
    if (e.target.className === "email") {
      setGap("email");
      setBlank(email);
      setBlank1("");
    } else if (e.target.className === "name") {
      setGap("name");
      setBlank(first);
      setBlank1(last);
    } else if (e.target.className === "age") {
      setGap("age");
      setBlank(age);
      setBlank1("");
    } else if (e.target.className === "map") {
      setGap("city");
      setBlank(location);
      setBlank1("");
    } else if (e.target.className === "phone") {
      setGap("phone");
      setBlank(tel);
      setBlank1("");
    } else if (e.target.className === "pass") {
      setGap("password");
      setBlank(password);
      setBlank1("");
    }
  }

  /* const newProducts = [...products]; */

  const [list, setList] = useState([
  {  name: "Firstname", email1: "email" , phone1:"phone" ,age1: "age"},
  ])

  const addUser = () =>{
  setUser(true)
  const Newtask={ name: first +" "+ last , email1: email , phone1:tel ,age1: age}
  setList([...list,Newtask])
  console.log(list);
  
  }
  console.log(list);



   const axiosApi = async() =>{
    const res = await axios("https://randomuser.me/api/");
    const info = res.data.results[0];
    setFirst(info.name.first);
    setLast(info.name.last);
    setPicture(info.picture.large);
    setEmail(info.email);
    setAge(info.dob.age);
    setLocation(info.location.city);
    setTel(info.phone);
    setPassword(info.login.password);
    setGap("name");
    setGender(info.gender);
    setBlank(info.name.first);
    setBlank1(info.name.last);
    // setPicture(res.data.results.picture.medium);
    console.log(info);
   };

  useEffect(() => {
 axiosApi();  
}, []);



  return (
    <div className="App">
      <img src={cw} alt="" />
      <br />
      <img src={picture} alt="" />
      <h3>My {gap} is</h3>
      <h2>
        {blank} {blank1}
      </h2>
      <div onMouseOver={handleClick} style={{ display: "flex", flex: "space-between" }}>
        {gender === "male" ? (
          <img className="name" src={man} alt="" />
        ) : (
          <img className="name" src={woman} alt="" />
        )}
        <img className="email" src={mail} alt="" />
        {gender === "male" ? (
          <img className="age" src={gman} alt="" />
        ) : (
          <img className="age" src={gwoman} alt="" />
        )}
        <img className="map" src={map} alt="" />
        <img className="phone" src={phone} alt="" />
        <img className="pass" src={padlock} alt="" />
      </div>
      <br />
      <div>
        <button onClick={axiosApi}>NEW USER</button>
        <button onClick={addUser}>ADD USER</button>
      </div>
          {user?
           <div>
            {list.map((item) => (
          <div>
            <div>
            <span>{item.name}</span>
            <span>{item.email1}</span>
            <span>{item.phone1}</span>
            </div>
          
          </div>
      ))}
          </div> : null
          }

    </div>
  );
}

export default App;
