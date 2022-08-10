import { createContext, useState} from "react";
import { useFetch, AddUser, DeleteUser} from "../helpers/functions";


export const BlogContext = createContext();

const initialValues={imageUrl:"",title:"",content:""}

const BlogContextProvider = ({ children }) => {
    
    const [info,setInfo]=useState(initialValues)

  const {isLoading,bloglist} = useFetch();
  

  
  return (
    <BlogContext.Provider value={{ isLoading,bloglist, AddUser, info,setInfo, DeleteUser}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;