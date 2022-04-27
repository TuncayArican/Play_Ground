import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
import {AddUser,EditUser, useFetch} from "../helpers/functions"

export const AuthContext = createContext();

const initialValues={title:"",imageUrl:"",content:""}

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [info,setInfo]=useState(initialValues);

  const handleFormSubmit=(e)=>{
    e.preventDefault();
   if (info.id) {
     EditUser(info)
   }
    else  {AddUser(info)}
  }
  

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);


  const editHandler=(id,title,imageUrl,content)=>{
    setInfo({id,title,imageUrl,content})
  }
  
  return (
    <AuthContext.Provider value={{ currentUser, info, setInfo, handleFormSubmit, useFetch, editHandler }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;