import React from 'react'
import MenuItem from './MenuItem'

const MenuList = ({list = []}) => {
  return (
    <ul className='menu-list-container'>
        {
            list && list.length ?
            list.map( (listItem) =>{
                return(
                    // we send each list item to the (MenuItem.jsx) component as a props.
                    // from here we send the three main parent element
                    <MenuItem item={listItem}/>
                )
            })
             : "no data found"
        }
    </ul>
  )
}

export default MenuList