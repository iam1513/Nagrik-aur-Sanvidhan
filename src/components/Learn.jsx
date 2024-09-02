import React from "react";
import CategoriesData from "../data/category-data";
import "../styles/learn.scss"; // Import your Sass file

const CategoriesDisplay = ({ url, name, desc }) => {
  return (
    <div className="categories-container">
      <div className="image-container">
        <img src={url} alt={name} className="image" />
      </div>
      <div className="details-container">
        <h2 className="heading">{name}</h2>
        <p className="description">{desc}</p>
        <button className="learn-more-button">Learn More</button>
      </div>
    </div>
  );
};

const Learn = () => {
  return (
    <div>
      <h1 className="explore-heading">Explore</h1>

      {CategoriesData.map((item, index) => (
        <CategoriesDisplay
          key={index}
          url={item.url}
          name={item.name}
          desc={item.description}
        />
      ))}
    </div>
  );
};

export default Learn;
