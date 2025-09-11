import { useState } from 'react'
import './App.css'
import ProductCard from './components/product-card'
import Header from './components/header'
import LoginPage from './pages/loginPage';
import AdminPage from './pages/AdminPage';
import { BrowserRouter } from 'react-router-dom';

function App() {
  

  return (
  <BrowserRouter>
      <Routes path="/">
      <Route path="/admin" element={<AdminPage/>}/>
      <Route path="/login" element={<LoginPage/>}/>
      
      
      </Routes>
  </BrowserRouter>
  );
}



export default App
