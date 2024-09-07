import React, { useState } from "react";
// import "./CrosswordPuzzle.css"; // Make sure this CSS file is present

const GRID_SIZE = 5;
const WORDS = [
  {
    word: "EQUALITY",
    direction: "H",
    row: 0,
    col: 0,
    hint: "Equal treatment under the law.",
  },
  {
    word: "RIGHTS",
    direction: "V",
    row: 1,
    col: 2,
    hint: "Fundamental entitlements.",
  },
  // Add more words here
];

const PuzzleGame = () => {
  const [grid, setGrid] = useState(createEmptyGrid());
  const [hints, setHints] = useState([]);

  function createEmptyGrid() {
    return Array(GRID_SIZE)
      .fill(null)
      .map(() => Array(GRID_SIZE).fill(""));
  }

  function placeWords() {
    const newGrid = createEmptyGrid();
    WORDS.forEach(({ word, direction, row, col }) => {
      if (direction === "H") {
        if (col + word.length <= GRID_SIZE) {
          for (let i = 0; i < word.length; i++) {
            newGrid[row][col + i] = word[i];
          }
        }
      } else if (direction === "V") {
        if (row + word.length <= GRID_SIZE) {
          for (let i = 0; i < word.length; i++) {
            newGrid[row + i][col] = word[i];
          }
        }
      }
    });
    setGrid(newGrid);
  }

  const handleCellChange = (row, col, value) => {
    const newGrid = [...grid];
    newGrid[row][col] = value.toUpperCase();
    setGrid(newGrid);
  };

  const showHint = (row, col) => {
    const hint = WORDS.find((word) => {
      return (
        (word.direction === "H" &&
          word.row === row &&
          word.col <= col &&
          col < word.col + word.word.length) ||
        (word.direction === "V" &&
          word.col === col &&
          word.row <= row &&
          row < word.row + word.word.length)
      );
    });
    if (hint) {
      setHints([...hints, hint.hint]);
    }
  };

  return (
    <div className="crossword-container">
      <h2>Crossword Puzzle</h2>
      <button onClick={placeWords}>Place Words</button>
      <div className="grid">
        {grid.map((row, rowIndex) => (
          <div className="grid-row" key={rowIndex}>
            {row.map((cell, colIndex) => (
              <input
                key={colIndex}
                type="text"
                maxLength={1}
                value={cell}
                onChange={(e) =>
                  handleCellChange(rowIndex, colIndex, e.target.value)
                }
                onFocus={() => showHint(rowIndex, colIndex)}
              />
            ))}
          </div>
        ))}
      </div>
      <div className="hints">
        {hints.map((hint, index) => (
          <p key={index}>{hint}</p>
        ))}
      </div>
    </div>
  );
};

export default PuzzleGame;
