import React, { useState } from 'react'
import './home.css'
import Header from '../../components/Header/Header'
import Menu from '../../components/menu/Menu'
import FoodDisplay from '../../components/foodDisplay/FoodDisplay'
import DownloadApp from '../../components/downloadApp/DownloadApp'

const Home = () => {
  const [category, setCategory] = useState("All");
  return (
    <div>
          <Header/>
          <Menu category={category} setCategory={setCategory}/>
          <FoodDisplay category={category}/>
          <DownloadApp/>
          
          

    </div>
  )
}

export default Home