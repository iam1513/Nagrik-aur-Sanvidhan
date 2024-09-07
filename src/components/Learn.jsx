import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import CategoriesData from "../data/category-data";
import Typewriter from "typewriter-effect";
import "../styles/learn.scss";

const Learn = () => {
  const { categoryId } = useParams(); // Get categoryId from URL parameters
  const navigate = useNavigate();

  const handleLearnMoreClick = (index) => {
    console.log("In Learn : ", index);
    navigate(`/learn/${index}`);
  };

  const handleBackClick = () => {
    navigate("/");
  };

  if (categoryId === undefined) {
    // Display categories if no categoryId in URL
    return (
      <div id="learn">
        <h1 className="explore-heading">
          <Typewriter
            options={{
              strings: ["EXPLORE"],
              autoStart: true,
              loop: true,
              delay: 500,
              deleteSpeed: 500,
            }}
          />
        </h1>
        {CategoriesData.map((item, index) => (
          <div key={index} className="categories-container">
            <div className="image-container">
              <img src={item.url} alt={item.name} className="image" />
            </div>
            <div className="details-container">
              <h2 className="heading">{item.name}</h2>
              <p className="description">{item.description}</p>
              <button
                className="learn-more-butt"
                onClick={() => handleLearnMoreClick(index)}
              >
                Learn More
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  }

  // Display articles for selected category
  const categoryIndex = parseInt(categoryId, 10);
  const category = CategoriesData[categoryIndex];

  if (!category) {
    return <div>Category not found</div>;
  }

  return (
    <div>
      <button className="back-button" onClick={handleBackClick}>
        Back
      </button>
      <h2>{category.name} Articles</h2>
      {category.articles.map((article, idx) => (
        <div key={idx} className="article-container">
          <h3>{article.title}</h3>
          <a href={article.videoUrl} target="_blank" rel="noopener noreferrer">
            Watch Video
          </a>
          <ul>
            {article.questions.map((question, qIndex) => (
              <li key={qIndex}>{question}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Learn;
