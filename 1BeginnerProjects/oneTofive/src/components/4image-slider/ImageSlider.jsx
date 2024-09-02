import React, { useEffect, useState } from "react";

import { BsArrowLeftCircleFill, BsArrowRightCircleFill } from "react-icons/bs";
import "./style.css";

const ImageSlider = ({ url, page = 1, limit = 10 }) => {
  const [images, setImages] = useState([]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [errorMsg, setErrorMsg] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetctImages = async (getUrl) => {
    try {
      setLoading(true); // loading will be on until the data is not fetch

      const response = await fetch(`${getUrl}?page=${page}&limit=${limit}`);
      const data = await response.json();

      if (data) {
        setImages(data);
        // once  the data is fetch and set in state, then will make the loading off.
        setLoading(false);
      }
    } catch (error) {
      setErrorMsg(error.message);
      setLoading(false);
    }
  };

  useEffect(() => {
    if (url !== "") {
      fetctImages(url);
    }
  }, [url]);

//   console.log(images);

  // To display both loading and error
  if (loading) {
    return <div>Loading data! Please wait</div>;
  }

  if (errorMsg !== null) {
    return <div>Error occured ! {errorMsg}</div>;
  }

//   Prevoius and next button
  const handlePrevious = () =>{
    // (currentSlide === 0) mean we are at image first on zero index of array, if it is true (images.length - 1) mean move to the last image, else (currentSlide - 1) mean move the previous image.
    setCurrentSlide(currentSlide === 0 ? images.length - 1 : currentSlide - 1)
  }

  const handleNext = () =>{
    // (currentSlide === images.length - 1)  we are at the last image, if it is true, (0) mean move to first image, (currentSlied + 1) mean move to the next image .
    setCurrentSlide(currentSlide === images.length - 1 ? 0 : currentSlide + 1)
  }

//   in currentSlide we have the indexes of array. 
  console.log(currentSlide);
  

  return (
    <div className="container">
      <BsArrowLeftCircleFill onClick={handlePrevious} className="arrow arrow-left" />

      {images && images.length
        ? images.map((imageItem, index) => (
            <img
              key={imageItem.id}
              alt={imageItem.download_url}
              src={imageItem.download_url}
              className={currentSlide === index ? "current-image" : "current-image hide-current-image"}
            />
          ))
        : null}

      <BsArrowRightCircleFill onClick={handleNext} className="arrow arrow-right" />

      <span className="circle-indicators">
        {
            images && images.length
            ? images.map((_, index) => (
                <button
                    key={index}
                    className={
                    currentSlide === index
                        ? "current-indicator"
                        : "current-indicator inactive-indicator"
                    }
                    // when click on small circle, it will show the image from array specific index.
                    onClick={() => setCurrentSlide(index)}
                ></button>
                ))
            : null
        }
      </span>
    </div>
  );
};

export default ImageSlider;
