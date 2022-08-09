import { createContext} from "react";
import { useFetch } from "../helpers/functions";


export const BlogContext = createContext();


const BlogContextProvider = ({ children }) => {
  const {isLoading,bloglist} = useFetch();
  
  


  
  return (
    <BlogContext.Provider value={{ isLoading,bloglist}}>
      {children}
    </BlogContext.Provider>
  );
};

export default BlogContextProvider;