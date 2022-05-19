import { createContext, useEffect, useState } from "react";
import { Navigate } from "react-router-dom";
import { userObserver } from "../helpers/firebase";
import {AddUser,EditUser,DeleteUser, useFetch} from "../helpers/functions"
import { useNavigate} from "react-router-dom";

export const AuthContext = createContext();

const initialValues={title:"",imageUrl:"",content:""}

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [info,setInfo]=useState(initialValues);

  const handleFormSubmit=(e)=>{
    e.preventDefault();
    AddUser(info)

  }
  

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);


  const editHandler=(id,title,imageUrl,content)=>{
    setInfo({id,title,imageUrl,content})
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, info, setInfo, handleFormSubmit, useFetch, editHandler , DeleteUser}}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;