import { useState } from "react";

const DiceGame = () => {
  const [player1Score, setPlayer1Score] = useState<number>(0);
  const [player2Score, setPlayer2Score] = useState<number>(0);
  const [turn, setTurn] = useState<"player1" | "player2">("player1");
  const [dice, setDice] = useState<number | null>(null);
  const [winner, setWinner] = useState<"player1" | "player2" | null>(null);
  const [message, setMessage] = useState<string>("");

  const rollDice = () => {
    if (winner) return;

    const roll = Math.floor(Math.random() * 6) + 1;
    setDice(roll);

    if (turn === "player1") {
      if (player1Score + roll > 100) {
        setTurn("player2");
        return;
      }

      const newScore = player1Score + roll;
      setPlayer1Score(newScore);
      if (newScore === 100) {
        setWinner("player1");
        setMessage("🏆 Player 1 Wins!");
      } else {
        setTurn("player2");
      }
    } else {
      if (player2Score + roll > 100) {
        setTurn("player1");
        return;
      }

      const newScore = player2Score + roll;
      setPlayer2Score(newScore);
      if (newScore === 100) {
        setWinner("player2");
        setMessage("🏆 Player 2 Wins!");
      } else {
        setTurn("player1");
      }
    }
  };

  const resetGame = () => {
    setPlayer1Score(0);
    setPlayer2Score(0);
    setTurn("player1");
    setDice(null);
    setWinner(null);
    setMessage("");
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-[#00FFEA]"
      style={{
        background: "linear-gradient(135deg, #1e0033, #000000)",
        fontFamily: '"Press Start 2P", monospace',
        textShadow: "0 0 4px #00ffff, 0 0 6px #00ffff",
      }}
    >
      <h1 className="text-2xl mb-8 text-[#ff00cc] drop-shadow-[0_0_5px_#ff00cc]">
         DICE DUEL RETRO
      </h1>

      <div className="flex w-full max-w-5xl justify-between text-center">
        {/* Player 1 */}
        <div
          className={`w-1/3 p-6 ${
            turn === "player1" ? "bg-[#6600cc]" : "bg-[#111111]"
          } border-4 border-[#00ffff]`}
        >
          <h2 className="text-base text-white mb-2">PLAYER 1</h2>
          <p className="text-3xl sm:text-4xl text-[#00ff99]">{player1Score}</p>
        </div>

        {/* Center Game Panel */}
        <div className="flex flex-col items-center justify-center bg-[#222] px-6 py-4 border-4 border-[#ff00cc] text-white w-1/3 space-y-3">
          <p className="text-xs ">{message}</p>
          {dice !== null && (
            <p className="text-xl ">🎲 {dice}</p>
          )}
          <p className="text-xs ">
            {turn === "player1" ? "▶ Player 1 Turn" : "▶ Player 2 Turn"}
          </p>

          {!winner && (
            <button
              onClick={rollDice}
              className="bg-[#00ffcc] text-black text-xs px-3 py-1 rounded hover:bg-[#00e6b8] border border-white"
            >
               Roll Dice
            </button>
          )}
          <button
            onClick={resetGame}
            className="bg-[#999] text-black text-xspx-3 p-1 rounded hover:bg-[#ccc] border border-white"
          >
             Reset
          </button>
        </div>

        {/* Player 2 */}
        <div
          className={`w-1/3 p-6 ${
            turn === "player2" ? "bg-[#6600cc]" : "bg-[#111111]"
          } border-4 border-[#00ffff]`}
        >
          <h2 className="text-base  text-white mb-2">PLAYER 2</h2>
          <p className="text-3xl  text-[#00ff99]">{player2Score}</p>
        </div>
      </div>
    </div>
  );
};

export default DiceGame;
