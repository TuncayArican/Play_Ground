import {useState,useEffect} from "react";
import { getDatabase,ref,set,push,onValue, remove,update} from "firebase/database";


// Bilgi Ekleme
export const AddUser=(info)=>{
    const db = getDatabase();
    const userRef=ref(db,"milestone");
    const newUserRef=push(userRef)
    set((newUserRef),{
        title:info.title,
        imageUrl:info.imageUrl,
        content:info.content,
    })
}

// Bilgi Çağırma

export const useFetch=()=>{
    const [isLoading,setIsLoading]=useState();
    const [contactList,setContactList]=useState();

    useEffect(() => {
        setIsLoading(true)

        const db = getDatabase();
        const userRef=ref(db,"milestone");

        onValue(userRef, (snapshot) => {
            const data = snapshot.val();
            const baglantiArray=[];

            for(let id in data){
                baglantiArray.push({id,...data[id]})
            }          
            setContactList(baglantiArray);
            setIsLoading(false);
        });
    },[])
    return {isLoading,contactList}
}

// Bilgi silme
export const DeleteUser=(id)=>{
        const db = getDatabase();
        const userRef=ref(db,"milestone");
        remove(ref(db,"baglanti/"+id))

}

// Bilgi Değiştirme

export const EditUser=(info)=>{
    const db = getDatabase();
    const updates = {};

    updates["milestone/"+info.id]=info;
    return update(ref(db),updates);

}