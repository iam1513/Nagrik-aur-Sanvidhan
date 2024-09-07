import React, { useState } from "react";
import { useParams } from "react-router-dom";
import CategoriesData from "../data/category-data";
import { FaBars, FaTimes } from "react-icons/fa"; // Importing icons from Font Awesome

const LearnArticles = () => {
  const { index } = useParams();
  const [selectedArticleIndex, setSelectedArticleIndex] = useState(0);
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);

  const category = CategoriesData[index];

  if (!category) {
    return <div>Category not found</div>;
  }

  const handleButtonClick = (articleIndex) => {
    setSelectedArticleIndex(articleIndex);
  };

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div id="learn-articles-full">
      <button onClick={toggleSidebar} className="toggle-sidebar-icon">
        {isSidebarOpen ? <FaTimes /> : <FaBars />}
      </button>
      {isSidebarOpen && (
        <div id="learn-articles-part1">
          {category.articles.map((article, articleIndex) => (
            <div key={articleIndex} className="article-container">
              <button onClick={() => handleButtonClick(articleIndex)}>
                {article.title}
              </button>
            </div>
          ))}
        </div>
      )}
      <div
        id="learn-articles-part2"
        style={{ width: isSidebarOpen ? "75%" : "100%" }}
      >
        <div className="article-container">
          <div className="video-part">
            <h2>{category.articles[selectedArticleIndex].title}</h2>
            <video width="700" controls>
              <source
                src={category.articles[selectedArticleIndex].videoUrl}
                type="video/mp4"
              />
              Your browser does not support the video tag.
            </video>
          </div>
          <div className="read-more">
            <h2>Read More</h2>
            <div>
              <p>{category.articles[selectedArticleIndex].textToRead}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LearnArticles;
