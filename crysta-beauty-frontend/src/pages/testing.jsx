import { useState } from "react";

export default function Testing(){
    const [file,setfile]=useState(null)

    function handleUpload(){
        
    }
  
    return(
        <div >
            <input type="file" onChange={
                (e)=>{
                    setfile(e.target.files[0])
                    }}/>
        </div>
    )
}
