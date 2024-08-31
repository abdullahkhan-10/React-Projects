import "./App.css";
import Header from "./components/Header";
import { useState } from "react";

function App() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [data, setData] = useState([]);

  const addData = () => {
    // initially we have empty arry, and with this function we are adding info in object, and keep the previous information in array. 
    setData([...data, { name, email }]);

    // when the data is added empty both the fields.
    setName("");
    setEmail("");
  };

  const removeData = (i) => {
    let my_arr = data;
    // remove one object from index each time we click of button.
    my_arr.splice(i, 1); 
    
    //with spread operator we will be able to remove object one by one.
    // we set the array again in variable once an object of info is remove.
    setData([...my_arr]); 
  };

  // it also working fine
  // const removeData = (i)=>{
  //   data.splice(i,1);
  //   setData([...data])

  // }

  return (
    <div className="App">
      <Header />
      {/* form section */}
      <div className="form">
        <input
          value={name}
          onChange={(event) => setName(event.target.value)}
          type="text"
          placeholder="Enter Name"
        />
        <input
          value={email}
          onChange={(event) => setEmail(event.target.value)}
          type="email"
          placeholder="Enter Email"
        />

        <button onClick={addData}>Add Data</button>
      </div>

      {/* data section */}
      <div className="data">
        {/* this will be visible initially */}
        <div className="item">
          <h4>Name</h4>
          <h4>Email</h4>
          <h4>Remove</h4>
        </div>
        {data.map((obj, index) => {
          return (
            <div key={index} className="item">
              <h4>{obj.name}</h4>
              <h4>{obj.email}</h4>

              <button onClick={() => removeData(index)}>Delete data</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
