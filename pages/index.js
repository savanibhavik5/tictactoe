import { Inter } from "next/font/google";
import HeadComponent from "./HeadComponent";
import Tic_Tac_Toe from "./Tic_Tac_Toe";
import { Fragment } from "react";
import React, { useState } from "react";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  // return (
  //   <Fragment >
  //     <Tic_Tac_Toe />
  //   </Fragment>
  // );
  const [box, setBox] = useState(Array(9).fill(null));
  const [player, setPlayer] = useState("X");
  const [winner, setWinner] = useState(null);
  const [winx, setwinx] = useState(0);
  const [wino, setwino] = useState(0);
  const [msg, setmsg] = useState("");
  const handleClick = (i) => {
    if (box[i] === null && !winner) {
      const newBox = [...box];
      newBox[i] = player;
      setBox(newBox);
      setPlayer(player === "X" ? "O" : "X");
      checkWinner(newBox, player);
      // setwinx(winx + 1);
      // console.log(player);
    }
  };
  const checkWinner = (box, currentPlayer) => {
    const winnerLine = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < winnerLine.length; i++) {
      const [a, b, c] = winnerLine[i];
      if (box[a] !== null && box[a] === box[b] && box[a] === box[c]) {
        setWinner(box[a]);
        if (box[a] === "X") {
          setwinx(winx + 1);
        } else if (box[a] === "O") {
          setwino(wino + 1);
        }
        setBox(Array(9).fill(null));
        setWinner(null);
        setPlayer(box[a]);
        setmsg("Last Game Winner" + box[a]);
        break;
      }
    }
  };
  const resetbox = () => {
    setBox(Array(9).fill(null));
    setWinner(null);
    setPlayer("X");
  };
  const resetgame = () => {
    window.location.reload();
  };
  return (
    <div className="text-center">
      <HeadComponent title="Tic Tac Toe" />
      <div className="status">
        {/* {`Winner: ${winner}`} */}
        <div className="text-danger">{msg}</div>
        {`Next player: ${player}`}
      </div>
      win BY X: {winx} or Win By O:{wino}
      <div className="board  align-items-center d-flex-block justify-content-center">
        {box.map((b, i) => (
          <div key={i} className="cell" onClick={() => handleClick(i)}>
            {b}
          </div>
        ))}
      </div>
      <button className="m-2 me-5 btn btn-success" onClick={resetbox}>
        Reset Box
      </button>
      <br />
      <button className="m-2 me-5 btn btn-danger" onClick={resetgame}>
        Reset Game
      </button>
    </div>
  );
};

