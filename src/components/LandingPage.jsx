import React from "react";
import Typewriter from "typewriter-effect";
import headImg from "../assets/landingpage/headimage.png";
import playImage from "../assets/landingpage/bgimagePlay.png";
import image1 from "../assets/landingpage/makingImage.png";
import image2 from "../assets/landingpage/brimage.png";

const LandingPage = () => {
  return (
    <div className="constitution-page">
      {/* Constitution Landing Section */}
      <div className="constitution-landing">
        <div className="content">
          <h1 className="type-effect">
            <Typewriter
              options={{
                strings: ["Learn", "Explore"],
                autoStart: true,
                loop: true,
                pauseFor: 2000,
                delay: 50,
              }}
            />
          </h1>
          <h1>
            <span className="country-name">India's</span> Constitution!
          </h1>
          <p>
            Unlock the power of India's Constitution with engaging games,
            interactive debates, and comprehensive learning tools. Dive into the
            world of 'Nagrik Aur Samvidhan' and explore your rights and duties
            in a fun, accessible way!
          </p>
          <div className="buttons">
            <button className="btn btn-primary">Sign Up</button>
            <button className="btn btn-secondary">Learn More</button>
          </div>
        </div>
        <div className="image-container">
          <img src={headImg} alt="India's Constitution illustration" />
        </div>
      </div>

      {/* Middle Section */}
      <div className="explore-section">
        <h2 className="section-title">— Explore —</h2>
        <div className="cards-container">
          <div className="card image-card">
            <img src={playImage} alt="Play & Learn" />
            <div className="overlay">
              <h3>Watch & Read</h3>
            </div>
          </div>
          <div className="card image-card">
            <img src={playImage} alt="Play & Learn" />
            <div className="overlay">
              <h3>Play & Learn</h3>
            </div>
          </div>
          <div className="card image-card">
            <img src={playImage} alt="Play & Learn" />
            <div className="overlay">
              <h3>Debate & Discover</h3>
            </div>
          </div>
        </div>
      </div>

      {/* Middle After Section */}
      <div className="constitution-section">
        <div className="row">
          <div className="column">
            <img
              src={image1}
              alt="Making of Indian Constitution"
              className="image"
            />
          </div>
          <div className="column text-column">
            <p>
              The Constitution of India was adopted on January 26, 1950, and
              serves as the country's rulebook for how it is governed. It sets
              out how the government works and what rights and duties citizens
              have.
            </p>
          </div>
        </div>

        <div className="row">
          <div className="column text-column">
            <p>
              The document was prepared by a special group called the
              Constituent Assembly, which included leaders like Dr. B.R.
              Ambedkar. They spent a lot of time discussing and making changes
              to the draft to ensure it would be fair and effective. The
              Constitution helps ensure that the government is organized and
              that everyone's rights are protected.
            </p>
          </div>
          <div className="column">
            <img src={image2} alt="Constituent Assembly" className="image" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
