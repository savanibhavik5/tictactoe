import { useState, useEffect } from "react";
import swal from "sweetalert";

const TicTacToe = () => {
  let [box, setBox] = useState([]);
  let [input, setInput] = useState(Number());
  let [player, setPlayer] = useState("X");
  let [winx, setwinx] = useState(0);
  let [wino, setwino] = useState(0);
  let [draw, setDraw] = useState(0);
  let [gridStyles, setGridStyles] = useState({});

  const functioncall = () => {
    let boxes = [];
    for (let j = 0; j < input; j++) {
      let devide = Array(input).fill("");
      boxes.push(devide);
    }
    setBox(boxes);
  };
  useEffect(() => {
    if (input >= 1) {
      functioncall();
    }
  }, [input]);

  useEffect(() => {
    setInput(3);
  }, []);

  const repeat = Array(input).fill("auto");
  const csss = repeat.join(" ");
  useEffect(() => {
    const styles = {
      display: "grid",
      gridTemplateColumns: csss,
      marginTop: "10px",
      width: "30px",
      height: "30px",
    };
    setGridStyles(styles);
  }, [input]);

  const handleClick = (row, col) => {
    if (box[row][col] === "") {
      const newBox = [...box];
      newBox[row][col] = player;
      setBox(newBox);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBox, player);
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
    for (let i = 0; i < box.length; i++) {
      if (box[i].includes("")) {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      swal({
        title: "Match Draw",
        icon: "info",
        button: "Play Again???",
      });
      setDraw(draw + 1);
      resetGame(player);
    } else {
      for (let i = 0; i < box.length; i++) {
        if (checkRow(box[i]) || checkColumn(i) || checkDiagonal()) {
          player === "X" ? setwinx(winx + 1) : setwino(wino + 1);
          swal({
            title: `Player ${player} wins!`,
            icon: "success",
            button: "Play Again???",
          });
          resetGame(player);
        }
      }
    }
  };
  const resetGame = (player) => {
    setPlayer(player);
    setInput(input);
    functioncall();
  };

  return (
    <div className="p-4">
      <div className="d-flex justify-content-center">
        <p className="px-5"> X: {winx} </p>
        <p className="px-5"> O: {wino} </p>
        <p className="px-5">Draw: {draw} </p>
      </div>
      <p>Total Matches: {winx + wino + draw}</p>
      <div className="text-center">
        <button
          className="btn btn-secondary m-2"
          onClick={() => setInput(input - 1)}
          disabled={input <= 1}
        >
          -
        </button>
        {input}x{input}
        <button
          className="btn btn-secondary m-2"
          onClick={() => setInput(input + 1)}
          disabled={input >= 10}
        >
          +
        </button>
      </div>
      <div className="d-inline"></div>
      <p>next player:-{player}</p>
      <div style={gridStyles} className="gap-1 px-5 p-2 gapping">
        {box?.map((b, row) => {
          console.log(b, "bbbbbb");
          console.log(box, "bbbbbb");
          return b?.map((bb, col) => {
            return (
              <div
                className="rounded border border-1 border-dark d-flex justify-content-center align-items-center"
                key={col}
                onClick={() => handleClick(row, col)}
                style={{ width: "50px", height: "50px" }}
              >
                {bb}
              </div>
            );
          });
        })}
      </div>
    </div>
  );
};

export default TicTacToe;
