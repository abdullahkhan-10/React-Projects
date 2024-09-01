import React, { useState } from "react";
// import { useEffect} from "react";

const RandomColor = () => {
  const [color, setColor] = useState("#000000");
  const [typeOfColor, setTypeOfColor] = useState("hex");

  const randomUtility = (getLength) =>{
    return Math.floor(Math.random() * getLength)
  }
  const createHexColor = () => {
    // #ffde24
    const hexArr = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];
    let hexColor = "#";
    for (let i = 0; i < 6; i++) {
        // the randomUtility function will take 6 random elemnet from the index of array, and will store that array of 6 elements in variable (hexColor)
      hexColor += hexArr[randomUtility(hexArr.length)];
    }
    // console.log(hexColor);
    setColor(hexColor)
  };

  const createRgbColor = () => {
    const r = randomUtility(256)
    const g = randomUtility(256)
    const b = randomUtility(256)
    let rgbColor = `(${r}, ${g}, ${b})`
    setColor(rgbColor)
  };

//   useEffect( ()=>{
//     if (typeOfColor === "hex") createHexColor()
//         else createRgbColor();
    
//   },[typeOfColor])

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        padding: "15px",
        background: color,
       
      }}
    >
        {/* With these two button we will update the typOfColor,if we click on hex then below generate button will run hex function, and if rgb  button is click then rgb function will run. */}
      <button
        onClick={() => {setTypeOfColor("hex");}}>Create HEX Color</button>
      <button
        onClick={() => {setTypeOfColor("rgb");}}>Create RGB Color</button>

        {/* If we have clicked on button with argument "hex" then (createHexColor) function will run, if (rgb) then (createRgbColor) functio will run. */}
      <button onClick={typeOfColor === "hex" ? createHexColor : createRgbColor}>
        Generate Random Color
      </button>

      {/* display name and type of each color */}

      <div style={{
        display: "flex",
        justifyContent: "center",
        alignContent: "center",
        color: "#fff",
        fontSize: "40px",
        marginTop: "50px",
        flexDirection: "column",
        gap: "5px"
      }}>
        <h2>{typeOfColor === "rgb" ? 'RGB Color' : 'HEX Color'}</h2>
        <h1>{color}</h1>
      </div>
    </div>
  );
};

export default RandomColor;


