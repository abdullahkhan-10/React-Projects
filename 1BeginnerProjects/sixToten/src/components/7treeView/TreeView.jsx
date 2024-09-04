import React from 'react'
import MenuList from './MenuList'
import "./style.css"


const TreeView = ({menuData = []}) => {
  return (
    <div className='tree-view-container'>
        {/* we send  the whole array of menu data to (MenuList.jsx) component */}
        <MenuList list = {menuData}/>
    </div>
  )
}

export default TreeView