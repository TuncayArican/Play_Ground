import app from "./firebase"
import { getDatabase,onValue,ref } from "firebase/database";
import {useState,useEffect} from "react"




export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [bloglist,setBloglist]=useState();

   useEffect(() => {
       const db = getDatabase(app);
       const userRef=ref(db,"milestone/")
       onValue(userRef,(snapshot)=>{
           const data=snapshot.val();
           const userArray=[]

           for (let id in data){
               userArray.push({id,...data[id]})
           }
           setBloglist(userArray)
           setIsLoading(false)
       })
   },[])
   return {isLoading,bloglist}
}