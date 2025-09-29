/*
 productId ,
    name,
    altNames ,
    price,
    labeledPrice,
    description,
    images,
    stock,


*/
import axios from "axios";
import { useState } from "react";
import toast from "react-hot-toast";
import { Link, useNavigate } from "react-router-dom";
export default function AddProductForm(){

    const [productId,setProductId]=useState("");
    const[name,setName]=useState("");
    const[altNames,setAltNames]=useState("");
    const[price,setPrice]=useState("");
    const[labeledPrice,setLabeledPrice]=useState("");
    const[description,setDescription]=useState("");
    const[stock,setStock]=useState("");
    const navigate=useNavigate()
   
    function handleSubmit(){
        const altNamesInArray=altNames.split(",")
        const product={
            productId:productId,
            name:name,
            altNames:altNamesInArray,
            price:price,
            labeledPrice:labeledPrice,
            description:description,
            stock:stock,
            images:[
                "https://www.bing.com/images/search?view=detailV2&ccid=pWOQVyWC&id=0CFCAA1C03B61C60D80CCBB8DE13CE6662C32D08&thid=OIP.pWOQVyWC7jkE3DnUwHnaDgHaLH&mediaurl=https%3a%2f%2fimages.pexels.com%2fphotos%2f1236701%2fpexels-photo-1236701.jpeg%3fcs%3dsrgb%26dl%3dcity-road-dawn-1236701.jpg%26fm%3djpg&cdnurl=https%3a%2f%2fth.bing.com%2fth%2fid%2fR.a56390572582ee3904dc39d4c079da0e%3frik%3dCC3DYmbOE964yw%26pid%3dImgRaw%26r%3d0&exph=6000&expw=4000&q=photos&FORM=IRPRST&ck=E75386E285905D4E458D04E8012B6E2B&selectedIndex=11&itb=0"
            ]
        }
         
        const token=localStorage.getItem("token")
        console.log(token)



        axios.post(import.meta.env.VITE_BACKEND_URL+"/api/product",product,{
           headers:{
            "Authorization":"Bearer"+token
           } 
        }).then(
            (respone)=>{
                toast.success("prdoct added successfully")
                navigate("/admin/products")
            }
        ).catch(
            ()=>{
                toast.error("Product added failed")
            }
        )
        toast.success("Form submitted")

    }
    return(
        <div className="w-full h-full rounded-lg flex justify-center items-center">
            <div className="w-[500px] h-[600px]  rounded-lg shadow-lg flex flex-col items-center">
                <h1 className="text-3xl font-bold text-gray-700 m-[10px]">Add Products</h1>
                <input
                value={productId} 
                 onChange={
                    (e)=>{
                        setProductId(e.target.value)
          

                    }
                }
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="product ID"
                 />
                 <input
                   value={name} 
                 onChange={
                    (e)=>{
                        setName(e.target.value)
          

                    }
                } 
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder=" Product Name"
                 />
                 <input 
                value={altNames} 
                 onChange={
                    (e)=>{
                        setAltNames(e.target.value)
          

                    }
                }
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="Alternative Names"
                 />
                 <input
                value={price} 
                 onChange={
                    (e)=>{
                        setPrice(e.target.value)
          

                    }
                } 
                  type="number"
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="Price"
                 />
                 <input
                value={labeledPrice} 
                 onChange={
                    (e)=>{
                        setLabeledPrice(e.target.value)
          

                    }
                } 
                  type="number"
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="Labelled Price"
                 />
                 <textarea
                 value={description} 
                 onChange={
                    (e)=>{
                        setDescription(e.target.value)
          

                    }
                }
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="Description"
                 />
                <input 
                value={stock} 
                 onChange={
                    (e)=>{
                        setStock(e.target.value)
          

                    }
                } 
                 type="number"
                 className="w-[400px] h-[50px] border border-gray-500 rounded-xl text-center m-[5px]" 
                 placeholder="Stock"
                 />
        
           <div className="w-[400px] h-[100px]   flex justify-center items-center rounded-lg">
                      <Link 
  to={"/admin/products"} 
  className="bg-red-500 text-white p-[10px] w-[180px] text-center rounded-lg  hover:bg-red-600 ">
  Cancel
</Link>
<button  onClick={handleSubmit}className="bg-green-500 cursor-pointer text-white p-[10px] w-[180px] text-center rounded-lg ml-[10px] hover:bg-green-600 ">Add Product </button>
</div>
           </div>
 
        </div>
    )

}