
import React from 'react'
import './menu.css'
import { menu_list } from '../../assets/assets'

const Menu = ({category, setCategory}) => {
  return (
    <div className="menu" id="menu">
      <h1>Explore our menu</h1>
      <p className='menu-text'>"Dive into a world of authentic Nepali dishes - explore our menu and find your new favorite!".</p>
      <div className="explore-menu-list">
        {menu_list.map((item) => {
          return (
            <div onClick={() => setCategory(prev => prev === item.menu_name ? "All" : item.menu_name)} className="explore-menu-list-item" key={item.id}>
              <img className={category===item.menu_name?"active":""} src={item.menu_image} alt={item.menu_name} />
              <p>{item.menu_name}</p>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Menu
