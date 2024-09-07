import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { useParams, useNavigate } from "react-router-dom";
import CategoriesData from "../data/category-data";

const LearnDup = () => {
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
    return (
      <div id="timeline">
        <h1>
          <Typewriter
            options={{
              strings: ["EXPLORE"],
              autoStart: true,
              loop: true,
            }}
          />
        </h1>
        <div className="timelineBox">
          {CategoriesData?.map((item, index) => (
            <div key={index}>
              <TimelineItem
                index={index}
                heading={item.name}
                description={item.description}
                onLearnMoreClick={() => handleLearnMoreClick(index)}
              />
            </div>
          )) || <p>No projects available</p>}
        </div>
      </div>
    );
  }

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
      {category.articles?.length > 0 ? (
        category.articles.map((article, idx) => (
          <div key={idx} className="article-container">
            <h3>{article.title}</h3>
            <a
              href={article.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch Video
            </a>
            <ul>
              {article.questions?.map((question, qIndex) => (
                <li key={qIndex}>{question}</li>
              ))}
            </ul>
          </div>
        ))
      ) : (
        <p>No articles available</p>
      )}
    </div>
  );
};

const TimelineItem = ({ heading, index, description, onLearnMoreClick }) => {
  const tiltEffect =
    index % 2 === 0
      ? {
          scale: 1.05,
          rotateX: -10,
          rotateY: 10,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        }
      : {
          scale: 1.05,
          rotateX: -10,
          rotateY: -10,
          boxShadow: "0px 10px 20px rgba(0, 0, 0, 0.3)",
        };

  return (
    <div
      className={`timelineItem ${
        index % 2 === 0 ? "leftTimeline" : "rightTimeline"
      }`}
    >
      <motion.div
        whileHover={tiltEffect}
        transition={{ type: "spring", stiffness: 200, damping: 10 }}
        className="inner"
      >
        <h2>{heading}</h2>
        <div className="descriptionBox">
          <p>{description}</p>
        </div>
        <button className="learn-more-but" onClick={onLearnMoreClick}>
          Learn More
        </button>
      </motion.div>
    </div>
  );
};

export default LearnDup;
