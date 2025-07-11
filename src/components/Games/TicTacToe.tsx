import { useState } from "react";

type Player = "X" | "O" | null;

const TicTacToe = () => {
  const [squares, setSquares] = useState<Player[]>(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index: number) => {
    if (squares[index] || calculateWinner(squares)) return;
    const nextSquares = [...squares];
    nextSquares[index] = isXNext ? "X" : "O";
    setSquares(nextSquares);
    setIsXNext(!isXNext);
  };

  const winner = calculateWinner(squares);
  const status = winner
    ? `🏆 Winner: ${winner}`
    : squares.every(Boolean)
    ? "😬 Draw!"
    : `👉 Next Player: ${isXNext ? "X" : "O"}`;

  const resetGame = () => {
    setSquares(Array(9).fill(null));
    setIsXNext(true);
  };

  return (
    <div
      className="flex flex-col items-center justify-center h-screen gap-6 p-6"
      style={{
        background: "linear-gradient(135deg, #0f0c29, #302b63, #24243e)",
        fontFamily: '"Press Start 2P", monospace',
        color: "#00FFEA",
        textShadow: "0 0 5px #00fdfd, 0 0 10px #00fdfd",
      }}
    >
      <h2 className="text-xl sm:text-2xl text-[#ff00cc] drop-shadow-[0_0_5px_#ff00cc]">
        🎮 TIC TAC TOE
      </h2>

      <p className="text-sm sm:text-base">{status}</p>

      <div className="grid grid-cols-3 gap-3">
        {squares.map((value, i) => (
          <button
            key={i}
            className="w-20 h-20 sm:w-24 sm:h-24 bg-black border-4 border-[#00fdfd] hover:bg-[#111] text-lg sm:text-2xl rounded-none"
            style={{
              color: value === "X" ? "#ff0066" : "#00ff99",
              textShadow: "0 0 4px #fff",
            }}
            onClick={() => handleClick(i)}
          >
            {value}
          </button>
        ))}
      </div>

      <button
        className="mt-4 px-4 py-2 bg-[#ff00cc] hover:bg-[#e600ac] text-black border-2 border-white"
        onClick={resetGame}
      >
         RESTART
      </button>
    </div>
  );
};

function calculateWinner(squares: Player[]): Player {
  const lines = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
  ];
  for (const [a, b, c] of lines) {
    if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
      return squares[a];
    }
  }
  return null;
}

export default TicTacToe;
