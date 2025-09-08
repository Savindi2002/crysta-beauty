import { useState } from 'react'
import './App.css'
import ProductCard from './components/product-card'
import Header from './components/header'

function App() {
  

  return (
    <div>
     <Header/>
     <ProductCard  name="iphone 16" description="aaasssrrtt ddd ttt ddddd" price="1000"/>
     <ProductCard  name="iphone 15 pro max" description="aaasssrrtt ddd ttt ddddd" price="2000"/>

    </div>
  )
}

export default App
