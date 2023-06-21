// import { useState, useEffect } from "react";
// import styled from "styled-components";

// const Tic_Tac_Toe = () => {
//   let [box, setBox] = useState([]);
//   let [input, setInput] = useState(Number());
//   let [player, setPlayer] = useState("X");
//   // let [winner, setWinner] = useState(null);
//   let game_over = false;
//   let boxes = [];

//   const resetGame = () => {
//     window.location.reload();
//   };
//   useEffect(() => {
//     setInput(4);
//   }, [setInput]);

//   useEffect(() => {
//     for (let j = 0; j < input; j++) {
//       let devide = [];
//       for (let k = 0; k < input; k++) {
//         devide.push("");
//       }
//       boxes.push(devide);
//       setBox(boxes);
//     }
//   }, [input]);

//   const handleClick = (row, col) => {
//     if (!game_over && box[row][col] === "") {
//       const newBox = [...box];
//       newBox[row][col] = player;
//       setBox(newBox);
//       setPlayer(player === "X" ? "O" : "X");
//       checkWinner(newBox, player);
//     }
//   };

//   const checkWinner = (row, col) => {
//     // console.log(row, "rowwwwww");
//     console.log(col, "col");
//     const X = (currentPlayer) => currentPlayer == "X";
//     const O = (currentPlayer) => currentPlayer == "O";
//     const checkBox = [];
//     let rightDiagonalValues = [];
//     let leftDiagonalValues = [];
//     let one = 1;

//     for (let i = 0; i < input; i++) {
//       let dec = input - one;
//       checkBox.push(box[row][col]);
//       rightDiagonalValues.push(box[row][row]);
//       leftDiagonalValues.push(box[row][dec]);
//       ++one;
//     }
//     winner = null;

//     if (
//       box[row].every(X) ||
//       checkBox.every(X) ||
//       rightDiagonalValues.every(X) ||
//       leftDiagonalValues.every(X)
//     ) {
//       winner = "X";
//     } else if (
//       checkBox.every(O) ||
//       checkBox.every(O) ||
//       rightDiagonalValues.every(O) ||
//       leftDiagonalValues.every(O)
//     ) {
//       winner = "O";
//     }
//     return winner;
//   };

// const repeat = [];
// for (let r = 0; r < input; r++) {
//   repeat.push("auto");
// }

// const csss = repeat.toString();

// const task = csss.replaceAll(",", " ");
// // console.log(task);

// const [gridStyles, setGridStyles] = useState({});

// useEffect(() => {
//   const styles = {
//     display: "grid",
//     gridTemplateColumns: task,
//     marginTop: "10px",
//     width: "30px",
//     height: "30px",
//   };
//   setGridStyles(styles);
// }, [task]);

//   return (
//     <>
//       <div className="text-center">
//         <input
//           type="number"
//           value={input || ""}
//           className="mt-2"
//           onChange={(e) => setInput(e.target.value)}
//         />
//         <div className=" d-inline ">
//           <button
//             className="btn btn-outline-danger m-2"
//             role="button"
//             onClick={resetGame}
//           >
//             reset
//           </button>
//         </div>
//       </div>
//       <div style={gridStyles} className="gap-1 p-5 gapping">
//         {box?.map((b, row) => {
//           return b?.map((bb, col) => {
//             return (
//               <div
//                 className="rounded border border-1 border-dark align-items-center d-flex justify-content-center"
//                 key={col}
//                 onClick={() => handleClick(row, col)}
//                 style={{ width: "50px", height: "50px" }}
//               >
//                 {bb}
//               </div>
//             );
//           });
//         })}
//       </div>
//     </>
//   );
// };
// export default Tic_Tac_Toe;
// // import { useEffect, useState } from "react";

// // const Dynamic = () => {
// //   const refresh = () => {
// //     window.location.reload();
// //   };

// //   const [gridData, setGridData] = useState([]);
// //   const [gridSize, setGridSize] = useState();
// //   const [currentPlayer, setCurrentPlayer] = useState("X");

// //   let grid = [];
// //   let gameOver = false;

// //   const handleChange = (e) => {
// //     setGridSize(e.target.value);
// //   };

// //   useEffect(() => {
// //     setGridSize(3);
// //   }, []);

// //   useEffect(() => {
// //     for (let j = 0; j < gridSize; j++) {
// //       let row = [];
// //       for (let k = 0; k < gridSize; k++) {
// //         row.push("");
// //       }
// //       grid.push(row);
// //       setGridData(grid);
// //     }
// //   }, [gridSize]);

// //   const handleClick = (rowIndex, colIndex) => {
// //     console.log(gridData);
// //     if (!gameOver) {
// //       gridData[rowIndex][colIndex] = currentPlayer;
// //       checkWinner(rowIndex, colIndex, gridData);
// //       setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
// //     }
// //   };

// //   const checkWinner = (rowIndex, colIndex) => {
// //     const checkRow = (currentValue) => currentValue === currentPlayer;
// //     const checkColumn = (currentValue, index) =>
// //       gridData[index][colIndex] === currentPlayer;
// //     const checkRightDiagonal = (currentValue, index) =>
// //       gridData[index][index] === currentPlayer;
// //     const checkLeftDiagonal = (currentValue, index) =>
// //       gridData[index][gridSize - 1 - index] === currentPlayer;

// //     const rowValues = gridData[rowIndex];
// //     const columnValues = gridData.map((row) => row[colIndex]);
// //     const rightDiagonalValues = gridData.map((row, index) => row[index]);
// //     const leftDiagonalValues = gridData.map(
// //       (row, index) => row[gridSize - 1 - index]
// //     );

// //     if (
// //       rowValues.every(checkRow) ||
// //       columnValues.every(checkRow) ||
// //       rightDiagonalValues.every(checkRightDiagonal) ||
// //       leftDiagonalValues.every(checkLeftDiagonal)
// //     ) {
// //       alert(`Winner is ${currentPlayer}`);
// //       gameOver = true;
// //     }
// //   };

// //   const repeat = Array(gridSize).fill("auto");
// //   const cssValue = repeat.join(" ");

// //   return (
// //     <>
// //       <div className="centers">
// //         <input
// //           type="number"
// //           value={gridSize}
// //           id="fruits"
// //           onChange={handleChange}
// //         />
// //         <button className="button-29" onClick={refresh} role="button">
// //           Reset
// //         </button>
// //       </div>
// //       <div
// //         style={{
// //           display: "grid",
// //           gridTemplateColumns: cssValue,
// //           marginTop: "10px",
// //           width: "200px",
// //           height: "200px",
// //         }}
// //       >
// //         {gridData?.map((row, rowIndex) => {
// //           console.log(gridData);
// //           return row?.map((cell, colIndex) => {
// //             return (
// //               <button
// //                 key={colIndex}
// //                 onClick={() => handleClick(rowIndex, colIndex)}
// //               >
// //                 {cell}
// //               </button>
// //             );
// //           });
// //         })}
// //       </div>
// //     </>
// //   );
// // };

// // export default Dynamic;

import { useState, useEffect } from "react";
import swal from "sweetalert";

const TicTacToe = () => {
  let [box, setBox] = useState([]);
  let [input, setInput] = useState(Number());
  let [player, setPlayer] = useState("X");
  let [gameOver, setGameOver] = useState(false);
  let [winx, setwinx] = useState(0);
  let [wino, setwino] = useState(0);
  let [draw, setDraw] = useState(0);
  let [msg, setMsg] = useState("");
  let [winner, setWinner] = useState(null);
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
    functioncall();
  }, [input]);

  useEffect(() => {
    setInput(3);
  }, []);

  useEffect(() => {
    const repeat = Array(input).fill("auto");
    const csss = repeat.join(" ");
    const styles = {
      display: "grid",
      gridTemplateColumns: csss,
      marginTop: "10px",
      width: "30px",
      height: "30px",
    };
    setGridStyles(styles);
    // console.log(task,"1111111111111")
  }, [input]);

  const handleClick = (row, col) => {
    if (!gameOver && box[row][col] === "") {
      const newBox = [...box];
      newBox[row][col] = player;
      setBox(newBox);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBox, player);
    }
  };

  const checkWinner = (box, currentPlayer) => {
    const checkRow = (row) => row.every((value) => value === currentPlayer);
    const checkColumn = (colIndex) =>
      box.every((row) => row[colIndex] === currentPlayer);

    const checkDiagonal = () => {
      let leftDiagonal = true;
      let rightDiagonal = true;

      for (let i = 0; i < box.length; i++) {
        leftDiagonal = leftDiagonal && box[i][i] === currentPlayer;
        rightDiagonal =
          rightDiagonal && box[i][box.length - 1 - i] === currentPlayer;
      }
      return (
        leftDiagonal || rightDiagonal
        // ||
        // setPlayer(currentPlayer === "X" ? "O" : "X")
      );
    };
    let isDraw = true;
    for (let i = 0; i < box.length; i++) {
      if (box[i].includes("")) {
        isDraw = false;
        break;
      }
    }
    if (isDraw) {
      setGameOver(true);
      setWinner(null);
      setMsg("The match ended in a draw.");
      swal({
        title: "Match Draw",
        icon: "info",
        button: "Play Again",
      });
      setDraw(draw + 1);
      // functioncall();
      resetGame();
    } else {
      for (let i = 0; i < box.length; i++) {
        if (checkRow(box[i]) || checkColumn(i) || checkDiagonal()) {
          setWinner(currentPlayer);
          setMsg("Last Game Winner is: " + currentPlayer);
          if (currentPlayer === "X") {
            setwinx(winx + 1);
          } else {
            setwino(wino + 1);
          }
          swal({
            title: `Player ${currentPlayer} wins!`,
            icon: "success",
            button: "Play Again",
          });
          resetGame();
        }
      }
    }
  };
  const resetGame = () => {
    setPlayer("X");
    setGameOver(false);
    setMsg("");
    setInput(input);
    functioncall();
  };

  return (
    <div className="">
      <div className="d-flex justify-content-center">
        <p className="d-inline"> |==| X: {winx} </p> |==|
        <p> O: {wino} </p> |==|
        <p>Draw: {draw} </p>
      </div>
      <p>Total Matches: {winx + wino + draw}</p>
      <div className="text-center">
        <input
          type="number"
          value={input}
          className="mt-2"
          onChange={(e) => setInput(parseInt(e.target.value))}
        />
      </div>
      <div className="d-inline">
        <button
          className="btn btn-outline-danger m-2"
          role="button"
          onClick={resetGame}
        >
          Reset
        </button>
      </div>
      <div style={gridStyles} className="gap-1 px-5 p-2 gapping">
        {box?.map((b, row) => {
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
