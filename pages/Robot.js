import React, { useState, useEffect } from "react";

const TicTacToe = () => {
  const [turn, setTurn] = useState("X");
  const [gameType, setGameType] = useState(3);
  const [totalTurns, setTotalTurns] = useState(0);
  const [robot, setRobot] = useState(true);
  const [finished, setFinished] = useState(false);
  const [selections, setSelections] = useState({ X: [], Y: [] });
  const [scores, setScores] = useState({ X: 0, Y: 0 });

  useEffect(() => {
    resetParams();
    resetAIButton();
  }, [gameType]);

  // Resetting parameters on resetting game
  const resetParams = () => {
    setTurn("X");
    setTotalTurns(0);
    setRobot(true);
    setFinished(false);
    setSelections({ X: [], Y: [] });
  };

  // Change turn after another
  const changeTurn = () => {
    setTurn((prevTurn) => (prevTurn === "X" ? "Y" : "X"));
  };

  // Winner patterns, match selected patterns on every turn for every player
  const winnerPatterns = () => {
    let wins = [];

    // 3 x 3 winning patterns;
    if (gameType === 3) {
      wins = [
        [11, 12, 13],
        [21, 22, 23],
        [31, 32, 33],
        [11, 21, 31],
        [12, 22, 32],
        [13, 23, 33],
        [11, 22, 33],
        [13, 22, 31],
      ];
    }

    // 4 x 4 winning patterns;
    if (gameType === 4) {
      wins = [
        [11, 12, 13, 14],
        [21, 22, 23, 24],
        [31, 32, 33, 34],
        [41, 42, 43, 44],
        [11, 21, 31, 41],
        [12, 22, 32, 42],
        [13, 23, 33, 43],
        [14, 24, 34, 44],
        [14, 23, 32, 41],
        [11, 22, 33, 44],
      ];
    }

    // 5 x 5 winning patterns;
    if (gameType === 5) {
      wins = [
        [11, 12, 13, 14, 15],
        [21, 22, 23, 24, 25],
        [31, 32, 33, 34, 35],
        [41, 42, 43, 44, 45],
        [51, 52, 53, 54, 55],
        [11, 21, 31, 41, 51],
        [12, 22, 32, 42, 52],
        [13, 23, 33, 43, 53],
        [14, 24, 34, 44, 54],
        [15, 25, 35, 45, 55],
        [11, 22, 33, 44, 55],
        [15, 24, 33, 42, 51],
      ];
    }

    return wins;
  };

  // Robot patterns, for auto players of every game board
  const defaultRobotPatterns = () => {
    let robotTurns = [];

    // 3 x 3 winning patterns;
    if (gameType === 3) {
      robotTurns = [22, 11, 33, 13, 21, 23, 12, 32, 31];
    }

    // 4 x 4 winning patterns;
    if (gameType === 4) {
      robotTurns = [
        11, 22, 33, 44, 14, 13, 12, 21, 31, 41, 42, 43, 24, 34, 32, 23,
      ];
    }

    // 5 x 5 winning patterns;
    if (gameType === 5) {
      robotTurns = [
        11, 22, 33, 44, 55, 15, 14, 13, 12, 51, 41, 31, 21, 35, 45, 25, 53, 52,
        54, 42, 43, 32, 34, 23, 24,
      ];
    }

    return robotTurns;
  };

  // Checking winner of selected type on selection
  const checkWinner = () => {
    const selected = selections[turn].sort();
    const winPatterns = winnerPatterns();
    let gameFinished = false;

    for (let x = 0; x < winPatterns.length; x++) {
      if (!gameFinished) {
        gameFinished = isWinner(winPatterns[x], selections[turn]);

        if (gameFinished) {
          scoreUpdate(turn);
          disableAllBoxes();
          alert(`Player ${turn} Won !!`);
          break;
        }
      }
    }

    // If no one wins, declare DRAW
    if (totalTurns === gameType * gameType && !gameFinished) {
      alert("Game Draw!");
      gameFinished = true;
      disableAllBoxes();
    }

    setFinished(gameFinished);
  };

  // Verifying each selections with winning pattern
  const isWinner = (winPattern, selections) => {
    let match = 0;

    for (let x = 0; x < winPattern.length; x++) {
      for (let y = 0; y < selections.length; y++) {
        if (winPattern[x] === selections[y]) {
          match++;
        }
      }
    }

    return match === winPattern.length;
  };

  // Disable all boxes after winning/draw
  const disableAllBoxes = () => {
    const elements = document.getElementsByClassName("grid-box");

    for (let i = 0; i < elements.length; i++) {
      elements[i].disabled = true;
    }
  };

  // Resetting autoplayer to true on change games
  const resetAIButton = () => {
    const checkbox = document.getElementById("robot");
    checkbox.checked = true;
  };

  // Generating a board for new game
  const generateGame = () => {
    resetParams();
    setGameType(Number(document.getElementById("game_type").value));
    setRobot(document.getElementById("robot").checked);
  };

  // Selecting check for desired position
  const markCheck = (obj) => {
    obj.value = turn;
    setTotalTurns((prevTotalTurns) => prevTotalTurns + 1);

    if (turn === "X") {
      selections.X.push(Number(obj.id));
    } else {
      selections.Y.push(Number(obj.id));
    }

    checkWinner();
    changeTurn();
  };

  // Updating player's score
  const scoreUpdate = (player) => {
    setScores((prevScores) => {
      return {
        ...prevScores,
        [player]: prevScores[player] + 1,
      };
    });
  };

  const getBoxValue = (index) => {
    // Check if the box is selected by player X or Y
    if (selections["X"].includes(index)) {
      return "X";
    } else if (selections["Y"].includes(index)) {
      return "Y";
    }

    // Return an empty string if the box is not selected by any player
    return "";
  };
  // Render the game board
  const renderBoard = () => {
    const board = [];
    const gridSize = gameType * gameType;

    for (let i = 1; i <= gridSize; i++) {
      board.push(
        <button
          key={i}
          id={i}
          className="grid-box"
          onClick={(e) =>
            !finished && !e.target.value && !robot && markCheck(e.target.id)
          }
        >
          {getBoxValue(i)}
        </button>
      );
    }
    return board;
  };

  return (
    <div>
      <div>
        <label htmlFor="game_type">Game Type:</label>
        <select id="game_type">
          <option value="3">3 x 3</option>
          <option value="4">4 x 4</option>
          <option value="5">5 x 5</option>
        </select>
      </div>
      <div>
        <label htmlFor="robot">Enable Auto Player:</label>
        <input type="checkbox" id="robot" />
      </div>
      <div>
        <button onClick={generateGame}>Start New Game</button>
      </div>
      <div>
        <h3>Player X Score: {scores.X}</h3>
        <h3>Player Y Score: {scores.Y}</h3>
      </div>
      <div className="grid-container">{renderBoard()}</div>
    </div>
  );
};

export default TicTacToe;
