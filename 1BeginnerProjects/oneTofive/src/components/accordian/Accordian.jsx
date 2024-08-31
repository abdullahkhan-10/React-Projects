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
    <div>
        {/* if data is available and his length is greater than zero display div otherwise dislay null */}
        {
            data && data.length > 0 ? <div className="accordian">
                {
                    data.map( (objItem,userId) =>{
                        return(
                            <div key={userId} className="item">
                                <div>
                                    <h3>{objItem.question}</h3>
                                    <span onClick={()=>{singleSelection(objItem.id)}}>+</span>
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




// //single selection
// //multiple selection

// import { useState } from "react";
// import data from "./data";
// import "./styles.css";

// export default function Accordian() {
//   const [selected, setSelected] = useState(null);
//   const [enableMultiSelection, setEnableMultiSelection] = useState(false);
//   const [multiple, setMultiple] = useState([]);

//   function handleSingleSelection(getCurrentId) {
//     setSelected(getCurrentId === selected ? null : getCurrentId);
//   }

//   function handleMultiSelection(getCurrentId) {
//     let cpyMutiple = [...multiple];
//     const findIndexOfCurrentId = cpyMutiple.indexOf(getCurrentId);

//     console.log(findIndexOfCurrentId);
//     if (findIndexOfCurrentId === -1) cpyMutiple.push(getCurrentId);
//     else cpyMutiple.splice(findIndexOfCurrentId, 1);

//     setMultiple(cpyMutiple);
//   }

//   console.log(selected, multiple);
//   return (
//     <div className="acc-wrapper">
//       <button onClick={() => setEnableMultiSelection(!enableMultiSelection)}>
//         Enable Multi Selection
//       </button>
//       <div className="accordian">
//         {data && data.length > 0 ? (
//           data.map((dataItem) => (
//             <div className="item">
//               <div
//                 onClick={
//                   enableMultiSelection
//                     ? () => handleMultiSelection(dataItem.id)
//                     : () => handleSingleSelection(dataItem.id)
//                 }
//                 className="title"
//               >
//                 <h3>{dataItem.question}</h3>
//                 <span>+</span>
//               </div>

//               {enableMultiSelection
//                 ? multiple.indexOf(dataItem.id) !== -1 && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )
//                 : selected === dataItem.id && (
//                     <div className="acc-content ">{dataItem.answer}</div>
//                   )}
//               {/* {selected === dataItem.id ||
//               multiple.indexOf(dataItem.id) !== -1 ? (
//                 <div className="content">{dataItem.answer}</div>
//               ) : null} */}
//             </div>
//           ))
//         ) : (
//           <div>No data found !</div>
//         )}
//       </div>
//     </div>
//   );
// }