import React, { useContext } from 'react'
import './display.css'
import { StoreContext } from '../../context/StoreContext'
import Items from '../foodItems/Items'

const FoodDisplay = ({ category }) => {  // Destructure the category prop here
  const { food_list } = useContext(StoreContext)

  return (
    <div className="food-display" id="food-display">
      <h2>Today's Special Dishes</h2>
      <p className='info'>Note: Items images may be differ from actual product.</p>

      <div className="food-display-list">
        {food_list.map((item, index) => {
          if(category==='All' || category===item.category){
            return (
              <Items
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            )
          }

        })}
      </div>
    </div>
  )
}

export default FoodDisplay

