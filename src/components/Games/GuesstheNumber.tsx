import { useState } from "react";

const GuessTheNumber = () => {
  const [target] = useState<number>(Math.floor(Math.random() * 100) + 1);
  const [guess, setGuess] = useState("");
  const [message, setMessage] = useState("");
  const [attempts, setAttempts] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  const handleGuess = () => {
    const num = parseInt(guess);
    if (isNaN(num)) {
      setMessage("❌ Enter a valid number!");
      return;
    }

    setAttempts((prev) => prev + 1);

    if (num === target) {
      setMessage(`🎉 Correct! The number was ${target}.`);
      setGameOver(true);
    } else if (num < target) {
      setMessage("📉 Too low! Try again.");
    } else {
      setMessage("📈 Too high! Try again.");
    }
  };

  const resetGame = () => {
    setGuess("");
    setAttempts(0);
    setMessage("");
    setGameOver(false);
    window.location.reload(); // resets the random number
  };

  return (
    <div
      className="min-h-screen bg-black text-green-400 flex flex-col items-center justify-center px-4"
      style={{ fontFamily: "'Press Start 2P', cursive" }}
    >
      <h1 className="text-2xl text-pink-500 mb-8 tracking-widest">
        🔢 Guess The Number
      </h1>

      <p className="mb-4 text-center">Guess a number between 1 and 100</p>

      <input
        type="number"
        value={guess}
        onChange={(e) => setGuess(e.target.value)}
        disabled={gameOver}
        className="text-center px-4 py-2 w-48 bg-black border border-green-400 text-green-400 focus:outline-none mb-4"
      />

      <button
        onClick={handleGuess}
        disabled={gameOver}
        className="bg-pink-600 text-black px-6 py-2 mb-4 hover:bg-pink-400"
      >
        GUESS
      </button>

      <p className="mb-4 text-yellow-300 text-sm text-center">{message}</p>

      <p className="text-sm text-gray-400">Attempts: {attempts}</p>

      {gameOver && (
        <button
          onClick={resetGame}
          className="mt-6 bg-green-500 text-black px-4 py-2"
        >
          PLAY AGAIN
        </button>
      )}
    </div>
  );
};

export default GuessTheNumber;
