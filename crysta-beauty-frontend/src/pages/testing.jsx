import { useState } from "react";


//https://ucfjibzzteisykfjqnys.supabase.co
//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InVjZmppYnp6dGVpc3lrZmpxbnlzIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTkxOTY2MTgsImV4cCI6MjA3NDc3MjYxOH0.WcCHvfSdh0ssNCdyvQrCu9pLiFyT9ikZDUIn7QBosX4
export default function Testing(){
    const [file,setfile]=useState(null)
    const supabase=createClient()

    function handleUpload(){
        const[file,setFile]=useState(null)
        const supabase=createClient("https://ucfjibzzteisykfjqnys.supabase.co",)

        function handleUpload(){
            supabase.storage.form("images").upload("<file name>",file,{
                cacheControl:"3600",
            upsert :false,    
            }).then(
                ()=>{
                    TransformStream.success("File upload successfully")
                }
            )
        }

    }
  
    return(
        <div >
            <input type="file" onChange={
                (e)=>{
                    setfile(e.target.files[0])
                    }}/>
                    <button onClick={handleUpload} className="bg-gray-700 text-white p-2 rounded-lg">Upload</button>
        </div>
    )
}
