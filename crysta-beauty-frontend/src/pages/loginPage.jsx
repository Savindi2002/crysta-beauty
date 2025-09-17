import {useState} from "react"
export default function LoginPage(){
    const[email,setEmail]=useState("")
    const[password,setPassword]=useState("")

    function handlelogin(){
        console.log("Login button clicked")
    }
    


    return(
        <div className="w-full h-screen bg-[url(/loginpage.jpg)] bg-cover bg-center flex">
            <div className="w-[50%] h-full"></div>
            
            <div className="w-[50%]h-full flex justify-center items-center "></div>
            <div className="w-[450px] h-[600px] backdrop-blur-xl shadow-xl rounded-xl"></div>
            <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="email" placeholder="email"/>
                  <input className="w-[400px] h-[50px] border border-white rounded-xl text-center m-[5px]" type="passowrd" placeholder="password"/>
                  <button  onClick={handlelogin} className="w-[400px] h-[50px] bg-green-500 text-white rounded-xl cursor-pointer">Login</button>
                  
        </div>
    )

}