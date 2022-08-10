import app from "./firebase"
import { getDatabase,onValue,ref, push, set, remove} from "firebase/database";
import {useState,useEffect} from "react"



export const AddUser=(info)=>{
    const db = getDatabase(app);
    const userRef=ref(db,"milestone/")
    const newUserRef=push(userRef);
    set(newUserRef,{
        imageUrl:info.imageUrl,
        title:info.title,
        content:info.content
    })

}

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


export const DeleteUser=(id)=>{
    console.log(id);
   const db = getDatabase(app);
    remove(ref(db,"milestone/"+id));
}