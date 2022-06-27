import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userObserver } from "../helpers/firebase";
import {AddUser,EditUser,DeleteUser, useFetch} from "../helpers/functions"
import { useNavigate} from "react-router-dom";

export const AuthContext = createContext();

const initialValues={title:"",imageUrl:"",content:""}
const initialValues1={title:"",imageUrl:"",content:""}

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [info,setInfo]=useState(initialValues);
  const [result,setResult]=useState(initialValues1);


  const handleFormSubmit=(e)=>{
    e.preventDefault();
    AddUser(info)
  }

  const handleFormEdit=(e)=>{
    e.preventDefault();
    console.log(result)
    EditUser(result)
  }

  

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);


  const editHandler=(id,title,imageUrl,content)=>{
    setInfo({id,title,imageUrl,content})
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, info, setInfo, result, setResult ,handleFormSubmit, handleFormEdit, useFetch, editHandler , DeleteUser,EditUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;