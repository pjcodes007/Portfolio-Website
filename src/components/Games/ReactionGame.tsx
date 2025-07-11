import { useState, useEffect } from "react";

const TOTAL_ROUNDS = 5;

const ClickDotGame = () => {
  const [dotVisible, setDotVisible] = useState(false);
  const [dotPosition, setDotPosition] = useState({ top: "50%", left: "50%" });
  const [startTime, setStartTime] = useState<number>(0);
  const [reactionTimes, setReactionTimes] = useState<number[]>([]);
  const [waiting, setWaiting] = useState(false);
  const [round, setRound] = useState(1);
  const [message, setMessage] = useState("Get Ready...");

  useEffect(() => {
    if (round <= TOTAL_ROUNDS) {
      const delay = Math.random() * 1500 + 1000;
      setWaiting(true);
      const timeout = setTimeout(() => {
        showDot();
        setWaiting(false);
      }, delay);
      return () => clearTimeout(timeout);
    }
  }, [round]);

  const showDot = () => {
    const top = `${Math.random() * 80 + 10}%`;
    const left = `${Math.random() * 80 + 10}%`;
    setDotPosition({ top, left });
    setDotVisible(true);
    setStartTime(Date.now());
    setMessage("Click the Dot!");
  };

  const handleClick = () => {
    if (!dotVisible) return;
    const endTime = Date.now();
    const reactionTime = endTime - startTime;
    setReactionTimes((prev) => [...prev, reactionTime]);
    setDotVisible(false);
    setRound((prev) => prev + 1);
    setMessage(`Nice! Reaction Time: ${reactionTime}ms`);
  };

  const resetGame = () => {
    setReactionTimes([]);
    setRound(1);
    setMessage("Get Ready...");
    setDotVisible(false);
  };

  const averageTime =
    reactionTimes.reduce((a, b) => a + b, 0) / reactionTimes.length || 0;

  return (
    <div
      className="relative w-full h-screen flex flex-col items-center justify-center text-[#00FFEA] overflow-hidden"
      style={{
        background: "linear-gradient(135deg, #1e0033, #000000)",
        fontFamily: '"Press Start 2P", monospace',
        textShadow: "0 0 4px #00ffff, 0 0 6px #00ffff",
      }}
    >
      <h1 className="text-xl sm:text-2xl text-[#ff00cc] mb-4">
         REACTION DOT
      </h1>

      <p className="text-sm mb-2">{message}</p>
      <p className="text-xs mb-4">
        Round: {round <= TOTAL_ROUNDS ? round : TOTAL_ROUNDS}/{TOTAL_ROUNDS}
      </p>

      {dotVisible && round <= TOTAL_ROUNDS && (
        <button
          onClick={handleClick}
          className="absolute w-12 h-12 bg-[#ff0066] border-4 border-white rounded-full"
          style={{
            top: dotPosition.top,
            left: dotPosition.left,
            transform: "translate(-50%, -50%)",
            boxShadow: "0 0 10px #ff0066",
          }}
        />
      )}

      {round > TOTAL_ROUNDS && (
        <div className="text-center space-y-2 mt-6">
          <p className="text-sm">🚀 Game Over!</p>
          <p className="text-xs">Average Time: {averageTime.toFixed(2)}ms</p>
          <ul className="text-[10px]">
            {reactionTimes.map((time, i) => (
              <li key={i}>Round {i + 1}: {time}ms</li>
            ))}
          </ul>
          <button
            onClick={resetGame}
            className="mt-3 bg-[#00ffcc] text-black px-3 py-1 text-xs border border-white hover:bg-[#00e6b8]"
          >
             Restart
          </button>
        </div>
      )}
    </div>
  );
};

export default ClickDotGame;
