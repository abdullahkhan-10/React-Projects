import React from "react";

const NewsItem = ({ title, description, src, url }) => {
  return (
    <div
      className="card d-inline-block mb-3 my-3 mx-3 py-2 px-2"
      style={{ width: "300px" }}
    >
      <img
        src={src}
        className="card-img-top"
        style={{ height: "220px", width: "280px" }}
      />

      <div className="card-body">
        {/* slice() method is used to make the title and dsecription uniform form all acrds. */}
        <h5 className="card-title">{title.slice(0,50)}</h5>
        <p className="card-text">{description? description.slice(0,90): "Despite promising to raise military spending, "}</p>
        <a href={url} className="btn btn-primary">
          Read More
        </a>
      </div>
    </div>

    
  );
};

export default NewsItem;
