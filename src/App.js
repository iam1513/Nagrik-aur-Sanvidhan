import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./components/Learn";
import Home from "./components/Home";

import "./styles/app.scss";
import LearnArticles from "./components/LearnArticles";
import LearnDup from "./components/LearnDup";
import LandingPage from "./components/LandingPage";
import Header from "./components/Header";
import PuzzleGame from "./components/PuzzleGame";
function App() {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/landingPage" element={<LandingPage />} />
        <Route path="/learn" element={<Learn />} />
        <Route path="/learn/:index" element={<LearnArticles />} />
        <Route path="learnDup" element={<LearnDup />} />
        <Route path="puzzle" element={<PuzzleGame />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
