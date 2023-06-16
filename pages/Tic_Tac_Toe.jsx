import React, { useState, useEffect } from "react";
import styled from "styled-components";

const Tic_Tac_Toe = () => {
  const [box, setBox] = useState([]);
  const [input, setInput] = useState();
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  let game_over = false;
  let boxes = [];

  const resetGame = () => {
    window.location.reload();
  };
  useEffect(() => {
    setInput(3);
  }, []);
  useEffect(() => {
    for (let j = 0; j < input; j++) {
      let devide = [];
      for (let k = 0; k < input; k++) {
        devide.push("");
      }
      boxes.push(devide);
      setBox(boxes);
    }
  }, [input]);

  console.log(box);

  const handleClick = (index1, index2) => {
    if (!game_over && box[index1][index2] == "") {
      const newBox = [...box];
      newBox[index1][index2] = player;
      setBox(newBox);
      setPlayer(player == "X" ? "O" : "X");
      // checkWinner(box, player);
      console.log(newBox, "rrr");
    } else {
      alert("Already Clicked");
    }
  };

  const repeat = [];
  for (let r = 0; r < input; r++) {
    repeat.push("auto");
  }

  const csss = repeat.toString();

  const task = csss.replaceAll(",", " ");
  console.log(task);

  const [gridStyles, setGridStyles] = useState({});

  useEffect(() => {
    const styles = {
      display: "grid",
      gridTemplateColumns: task,
      marginTop: "10px",
      width: "300px",
      height: "300px",
    };
    setGridStyles(styles);
  }, [task]);

  return (
    <>
      <div className="text-center m-2">
        <input
          type="number"
          value={input || ""}
          // id="fruits"
          onChange={(e) => setInput(e.target.value)}
        />
        <div className="m-2 d-inline">
          <button className="btn btn-outline-danger " role="button">
            reset
          </button>
        </div>
      </div>
      <div style={gridStyles} className="gap-1 p-5 gapping">
        {box?.map((b, index1) => {
          // console.log(box);
          return b?.map((bb, index2) => {
            return (
              <div
                className="rounded border border-1 border-dark align-items-center d-flex justify-content-center"
                key={index2}
                // onClick={handleClick.bind(this, index1, index2)}
                onClick={() => handleClick(index1, index2)}
                style={{ width: "50px", height: "50px" }}
              >
                {bb}
              </div>
            );
          });
        })}
      </div>
    </>
  );
};
export default Tic_Tac_Toe;
// import { useEffect, useState } from "react";

// const Dynamic = () => {
//   const refresh = () => {
//     window.location.reload();
//   };

//   const [gridData, setGridData] = useState([]);
//   const [gridSize, setGridSize] = useState();
//   const [currentPlayer, setCurrentPlayer] = useState("X");

//   let grid = [];
//   let gameOver = false;

//   const handleChange = (e) => {
//     setGridSize(e.target.value);
//   };

//   useEffect(() => {
//     setGridSize(3);
//   }, []);

//   useEffect(() => {
//     for (let j = 0; j < gridSize; j++) {
//       let row = [];
//       for (let k = 0; k < gridSize; k++) {
//         row.push("");
//       }
//       grid.push(row);
//       setGridData(grid);
//     }
//   }, [gridSize]);

//   const handleClick = (rowIndex, colIndex) => {
//     console.log(gridData);
//     if (!gameOver) {
//       gridData[rowIndex][colIndex] = currentPlayer;
//       checkWinner(rowIndex, colIndex, gridData);
//       setCurrentPlayer(currentPlayer === "X" ? "O" : "X");
//     }
//   };

//   const checkWinner = (rowIndex, colIndex) => {
//     const checkRow = (currentValue) => currentValue === currentPlayer;
//     const checkColumn = (currentValue, index) =>
//       gridData[index][colIndex] === currentPlayer;
//     const checkRightDiagonal = (currentValue, index) =>
//       gridData[index][index] === currentPlayer;
//     const checkLeftDiagonal = (currentValue, index) =>
//       gridData[index][gridSize - 1 - index] === currentPlayer;

//     const rowValues = gridData[rowIndex];
//     const columnValues = gridData.map((row) => row[colIndex]);
//     const rightDiagonalValues = gridData.map((row, index) => row[index]);
//     const leftDiagonalValues = gridData.map(
//       (row, index) => row[gridSize - 1 - index]
//     );

//     if (
//       rowValues.every(checkRow) ||
//       columnValues.every(checkRow) ||
//       rightDiagonalValues.every(checkRightDiagonal) ||
//       leftDiagonalValues.every(checkLeftDiagonal)
//     ) {
//       alert(`Winner is ${currentPlayer}`);
//       gameOver = true;
//     }
//   };

//   const repeat = Array(gridSize).fill("auto");
//   const cssValue = repeat.join(" ");

//   return (
//     <>
//       <div className="centers">
//         <input
//           type="number"
//           value={gridSize}
//           id="fruits"
//           onChange={handleChange}
//         />
//         <button className="button-29" onClick={refresh} role="button">
//           Reset
//         </button>
//       </div>
//       <div
//         style={{
//           display: "grid",
//           gridTemplateColumns: cssValue,
//           marginTop: "10px",
//           width: "200px",
//           height: "200px",
//         }}
//       >
//         {gridData?.map((row, rowIndex) => {
//           console.log(gridData);
//           return row?.map((cell, colIndex) => {
//             return (
//               <button
//                 key={colIndex}
//                 onClick={() => handleClick(rowIndex, colIndex)}
//               >
//                 {cell}
//               </button>
//             );
//           });
//         })}
//       </div>
//     </>
//   );
// };

// export default Dynamic;
