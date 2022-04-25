import { createContext, useEffect, useState } from "react";
import { userObserver } from "../helpers/firebase";
import {AddUser} from "../helpers/functions"

export const AuthContext = createContext();

const initialValues={title:"",imageUrl:"",content:""}

const AuthContextProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState();
  const [info,setInfo]=useState(initialValues);
  const handleFormSubmit=(e)=>{
    e.preventDefault();
    console.log(info)
    AddUser(info)}
  

  useEffect(() => {
    userObserver(setCurrentUser);
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, info, setInfo, handleFormSubmit  }}>
      {children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;