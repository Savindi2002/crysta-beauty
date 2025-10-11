import { useState } from "react";

export default function Testing(){
  
    return(
        <div >
            <input type="file" onChange={
                (e)=>{
                    console.log(e.target.files[0])
                    }}/>
        </div>
    )
}
