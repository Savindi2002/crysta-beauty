import axios from "axios"
import { useEffect, useState } from "react"

export default function AdminProductsPage(){

    const [products,setProducts]=useState([])
    useEffect(
        ()=>{
        axios.get(import.meta.env.VITE_BACKEND_URL+"/api/product").then(
        (response)=>{
            console.log(response.data)
            setProducts(response.data)
        })


        }
    
        ,[]
    )



    
    
    

    return(
        <div className="w-full h-full  rounded-lg">
            <table className="w-full bg-red-900" >
                <thead>
                    <tr>
                        <th className="p-2">Product ID</th>
                        <th className="p-2">Name</th>
                        <th className="p-2">Price</th>
                        <th className="p-2">Labeled Price</th>
                        <th className="p-2">Stock</th>

                    </tr>

                </thead>
                <tbody>
                    <tr>
                       <td className="p-2">1</td> 
                       <td className="p-2">Product 1</td> 
                       <td className="p-2">100</td> 
                       <td className="p-2">150</td> 
                       <td className="p-2">10</td> 
                    </tr>
                    <tr>
                       <td className="p-2">1</td> 
                       <td className="p-2">Product 1</td> 
                       <td className="p-2">100</td> 
                       <td className="p-2">150</td> 
                       <td className="p-2">10</td> 
                    </tr>

                </tbody>
         
            </table>
           {
             products.map(
                (product,index)=>{
                    console.log("mapping"+product.productId)
                    // return(
                    //     <div key={index} className="w-full h-[100px] bg-gray-300 flex items-center justify-between p-2">
                    //         <div className="flex items-center">
                    //             <img className="w-[50px] h-[50px] rounded-lg" src={product.image} alt=""/>
                    //             <h1 className="text-xl font-bold ml-2">{product.name}</h1>
                    //         </div>
                    //         <div className="flex items-center">
                                
                    //             <h1 className="text-xl font-bold ml-2">{product.name}</h1>
                    //             <button className="bg-red-500 text-white p-2 rounded-lg ml-2">Delete</button>
                    //         </div>
                    //         </div>
                        
                    // )
                }
             )
           }
        </div>
    )
}