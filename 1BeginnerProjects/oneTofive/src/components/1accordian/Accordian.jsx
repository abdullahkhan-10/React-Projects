import React, { useState } from 'react'
import "./style.css"
import data from "./data"


const Accordian = () => {
    const [selected, setSelected] = useState(null)

    // for single selection 
    const singleSelection = (getId) =>{
        // console.log(getId);
        //this only show the content 
        // setSelected(getId)
        // to hide the content as will on clicking on same accordian
        setSelected(getId === selected ? null : getId)
        
    }
    console.log(selected);
    
  return (
    <div className="acc-wrapper">
        {/* if data is available and his length is greater than zero display div otherwise dislay null */}
        {
            data && data.length > 0 ? <div className="accordian">
                {
                    data.map( (objItem,userId) =>{
                        return(
                            <div key={userId} className="item">
                                <div className='toggle'>
                                    <h3>{objItem.question}</h3>
                                    <span onClick={()=>{singleSelection(objItem.id)} }>+</span>  
                                </div>

                                {/* display answers */}
                                {
                                    selected === objItem.id ? <div>
                                        <p className='acc-content '>{objItem.answer}</p>
                                    </div> : null
                                }
                            </div>
                        )
                    })
                }
            </div>: null
        }
    </div>
  )
}

export default Accordian;




