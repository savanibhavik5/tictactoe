import { useState, useEffect } from "react";
import swal from "sweetalert";

const TicTacToe = () => {
  const [box, setBox] = useState([]);
  const [input, setInput] = useState(3);
  const [player, setPlayer] = useState("X");
  const [winx, setwinx] = useState(0);
  const [wino, setwino] = useState(0);
  const [draw, setDraw] = useState(0);
  const [gridStyles, setGridStyles] = useState({});
  const [history, setHistory] = useState([]);
  const [stepNumber, setStepNumber] = useState(0);

  const functionCall = () => {
    let boxes = [];
    for (let j = 0; j < input; j++) {
      let divide = Array(input).fill("");
      boxes.push(divide);
    }
    setBox(boxes);
    setHistory([boxes]);
  };

  useEffect(() => {
    functionCall();
  }, [input]);

  useEffect(() => {
    const repeat = Array(input).fill("auto");
    const csss = repeat.join(" ");
    const styles = {
      display: "grid",
      gap: "3px",
      gridTemplateColumns: csss,
      marginTop: "10px",
    };
    setGridStyles(styles);
  }, [input]);

  const handleClick = (row, col) => {
    if (box[row][col] === "") {
      const newBox = box.map((row) => [...row]);
      newBox[row][col] = player;
      setBox(newBox);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBox, player);
      setHistory([...history.slice(0, stepNumber + 1), newBox]);
      setStepNumber(stepNumber + 1);
    }
  };

  const checkWinner = (box, player) => {
    const checkRow = (row) => row.every((value) => value === player);
    const checkColumn = (colIndex) =>
      box.every((row) => row[colIndex] === player);

    const checkDiagonal = () => {
      let leftDiagonal = true;
      let rightDiagonal = true;
      for (let i = 0; i < box.length; i++) {
        leftDiagonal = leftDiagonal && box[i][i] === player;
        rightDiagonal = rightDiagonal && box[i][box.length - 1 - i] === player;
      }
      return leftDiagonal || rightDiagonal;
    };

    let isDraw = true;
    for (let j = 0; j < box.length; j++) {
      if (box[j].includes("")) {
        isDraw = false;
        break;
      }
    }
    for (let i = 0; i < box.length; i++) {
      if (checkRow(box[i]) || checkColumn(i) || checkDiagonal()) {
        player === "X" ? setwinx(winx + 1) : setwino(wino + 1);
        swal({
          title: `Player ${player} wins!`,
          icon: "success",
          button: "Play Again???",
        }).then(() => resetGame(player));
        setHistory([]);
        return;
      }
      if (isDraw) {
        swal({
          title: "Match Draw",
          icon: "info",
          button: "Play Again???",
        }).then(() => resetGame(player));
        setDraw(draw + 1);
        setHistory([]);
      }
    }
  };

  const jumpTo = (step) => {
    setStepNumber(step);
    setPlayer(step % 2 === 0 ? "X" : "O");
    setBox(history[step]);
  };

  const resetGame = (player) => {
    setInput(input);
    setPlayer(player);
    functionCall();
  };

  return (
    <div className="p-5">
      <div className="d-flex justify-content-center">
        <p className="px-5">X: {winx}</p>
        <p className="px-5">O: {wino}</p>
        <p className="px-5">Draw: {draw}</p>
      </div>
      <p>Total Matches: {winx + wino + draw}</p>
      <div className="text-center">
        <button
          className="btn btn-secondary m-2"
          onClick={() => setInput((prevInput) => prevInput - 1)}
          disabled={input <= 1}
        >
          -
        </button>
        {input} x {input}
        <button
          className="btn btn-secondary m-2"
          onClick={() => setInput((prevInput) => prevInput + 1)}
          disabled={input >= 10}
        >
          +
        </button>
      </div>
      <p>Next player: {player}</p>
      <div className="mt-4">
        <p>Game History:</p>
        {history?.map((step, move) => (
          <button
            key={move}
            onClick={() => jumpTo(move, step)}
            className={`btn m-1 border border-1 ${
              move === stepNumber ? "fw-bold" : ""
            }`}
          >
            {move === 0 ? "Reset" : move}
          </button>
        ))}
      </div>
      <div className="d-flex align-items-center justify-content-center">
        <div style={gridStyles} className="">
          {box?.map((b, row) => {
            return b?.map((bb, col) => {
              return (
                <div
                  className="rounded border border-1 border-dark d-flex justify-content-center align-items-center"
                  key={col}
                  onClick={() => handleClick(row, col)}
                  style={{
                    width: "50px",
                    height: "50px",
                    backgroundColor: bb === "X" ? "" : "lightpink",
                  }}
                >
                  {bb}
                </div>
              );
            });
          })}
        </div>
      </div>
    </div>
  );
};

export default TicTacToe;
