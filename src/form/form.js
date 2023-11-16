import React, { useState } from "react";

const Form = () => {

    const [name,setName] = useState("");
    const [number,setnum] = useState(0);
    const [arr,setarr] = useState("");

    

    const user=(e)=>{
        if(e.target.name==="name1"){
            setName(e.target.value)
        }
        else if(e.target.name==="number"){
            setnum(e.target.value)
        }
    }

    const go = () =>{
        const obj = {nam:name,num:number}
        setarr([obj])
     console.log(obj)
    }
    console.log(arr)



    return(
        <>
        <input type="name" onChange={user} name="name1" value={name} placeholder="name"></input> <br></br>
        <input type="number" onChange={user} name="number" value={number} placeholder="number"></input><br></br>
        <button type="sumbit" onClick={go}>sumbit</button>
        
        
        
        </>
    )
}

export default Form
