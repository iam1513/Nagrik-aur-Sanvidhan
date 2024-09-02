import { BrowserRouter, Routes, Route } from "react-router-dom";
import Learn from "./components/Learn";
import Home from "./components/Home";

import "./styles/learn.scss";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/learn" element={<Learn />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
