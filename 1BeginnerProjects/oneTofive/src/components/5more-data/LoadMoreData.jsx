import React, { useEffect, useState } from "react";
import "./style.css";

const LoadMoreData = () => {
  const [loading, setLoading] = useState(false);
  const [productss, setProductss] = useState([]);
  const [count, setCount] = useState(0);
  const [disableButton, setDisableButton] = useState(false)

  const fetchProducts = async () => {
    try {
      setLoading(true);
      // (count === 0) mean we are at first page, it is true the display the first page, else (count *20) mean on the second page display more new products.
      const response = await fetch(
        `https://dummyjson.com/products?limit=20&skip=${
          count === 0 ? 0 : count * 20
        }`
      );
      const data = await response.json();

      // in result we get info in object
        console.log(data);  
      // the info are store on key (products) of object (result) in array formate  
        // console.log(data.products); 

      if (response && data.products && data.products.length) {
        // if all of the above condition is true, set the info in const (products) inside useState hook.
        setProductss(data.products);
        // to set previouse data store as well in array and load the new data as well.
        // (...prevData) will store previous data and (...data.products) will store the current loaded data.
        // setProductss( (prevData) => [...prevData, ...data.products])
        setLoading(false);
      }
    } catch (error) {
      console.log(error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [count]);

  useEffect( () =>{
    if (productss && productss.length === 100)  setDisableButton(true)
  },[productss])

  console.log(count);
//   console.log(productss);
  
  

  if (loading) {
    return <div>Loading Data ! Please wait.</div>;
  }

  return (
    <div className="load-more-container">
        {/* all products */}
      <div className="product-container">
            {productss && productss.length
            ? productss.map((myItem) => (
                <div className="product" key={myItem.id}>
                    <img src={myItem.thumbnail} alt={myItem.title} />
                    <p>{myItem.title}</p>
                </div>
                ))
            : "No Data Found"}
           
      </div>

      {/* button  */}
      <div className="button-container">
        {/* initialy we have count zero, by clicking on this button the count will increase by one, which in urkl we have pultiplied the count by 20, so each time we click on this button 20 more data will loaded. */}
        <button disabled={disableButton} onClick={ () =>setCount(count + 1)}>Load More Data</button>
      </div>

      {
        disableButton ? <p>You have reached to 100 Products.</p> : null
      }
    </div>
  );
};

export default LoadMoreData;
