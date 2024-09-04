import React from 'react'
import MenuList from './MenuList';
import { useState } from 'react';


const MenuItem = ({item}) => {
    const [displayChild, setDisplayChild] = useState({})


    const toggleChildren = (getCurrentLabel) =>{
        setDisplayChild({
            ...displayChild,
            [getCurrentLabel]: !displayChild[getCurrentLabel]
        })
    }
    // console.log(item);
    // console.log(displayChild);
    

  return (
    <li>
        <div className='menu-item'>
           <p>{item.label}</p>
           {item && item.children && item.children.length ? <span onClick={() => toggleChildren(item.label)}>
            {
                displayChild[item.label] ? '-' : '+'
            }
            </span> : null }
        </div>

        {/* from here we send back the child element of each parent element to (MenuList.jsx) component, to again map through their child element furthur. */}
        {item && item.children && item.children.length > 0 && displayChild[item.label]
         ? <MenuList list={item.children}/>
         : null   
        }
    </li>
  )
}

export default MenuItem