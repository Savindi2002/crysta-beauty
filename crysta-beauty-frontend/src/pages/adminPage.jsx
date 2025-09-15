import { Link, Route, Routes } from "react-router-dom";
import { FaUsers } from 'react-icons/fa';

export default  function AdminPage(){
    return(
        <div className="w-full h-screen bg-gray-200 flex p-2">
            <div className="h-full w-[300px] ">
           <Link to="/admin/users" className="p-2 border flex  items-center"><FaUsers/>Users</Link>
           <Link to="/admin/products" className="block p-2">Products</Link>
           <Link to="/admin/orders" className="block p-2">Orders</Link>
           </div>
            <div className="h-full bg-white w-[calc(100vw-300px)] rounded-lg">
                <Routes path="/*">
                <Route  path="/users" element={<h1>Users</h1>}/>
                <Route  path="/products" element={<h1>Products</h1>}/>
                <Route  path="/Orders" element={<h1>Orders</h1>}/>
                </Routes>
            </div>
            



        </div>
    )
}