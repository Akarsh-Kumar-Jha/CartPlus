import React, { useEffect, useState } from 'react'

function UsefetchData(url) {
 const [loading,setLoading] = useState(true);
 const [data,setData] = useState([]);


useEffect(() => {
    const dataFtech = async() => {
        try{
     const response = await fetch(url);
     const result = await response.json();
     if(result){
        console.log(result);
        setData(result)
     }
     }catch(error){
        console.error("Error aa Rha Hai!",error)
    
     }finally{
        setLoading(false)
     }
    }

    dataFtech()
},[url]);
return {loading,data};

}

export default UsefetchData