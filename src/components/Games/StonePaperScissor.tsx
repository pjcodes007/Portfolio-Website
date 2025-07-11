import { useState } from "react";

const choices = ["rock", "paper", "scissors"] as const;
type Choice = (typeof choices)[number];

const getRandomChoice = (): Choice =>
  choices[Math.floor(Math.random() * choices.length)];

const getResult = (player: Choice, computer: Choice): "win" | "lose" | "draw" => {
  if (player === computer) return "draw";
  if (
    (player === "rock" && computer === "scissors") ||
    (player === "paper" && computer === "rock") ||
    (player === "scissors" && computer === "paper")
  ) {
    return "win";
  }
  return "lose";
};

const StonePaperScissors = () => {
  const [playerChoice, setPlayerChoice] = useState<Choice | null>(null);
  const [computerChoice, setComputerChoice] = useState<Choice | null>(null);
  const [result, setResult] = useState<"win" | "lose" | "draw" | "">("");
  const [score, setScore] = useState({ wins: 0, losses: 0, draws: 0 });

  const play = (choice: Choice) => {
    const comp = getRandomChoice();
    const outcome = getResult(choice, comp);

    setPlayerChoice(choice);
    setComputerChoice(comp);
    setResult(outcome);

    if (outcome === "win") setScore((s) => ({ ...s, wins: s.wins + 1 }));
    else if (outcome === "lose") setScore((s) => ({ ...s, losses: s.losses + 1 }));
    else setScore((s) => ({ ...s, draws: s.draws + 1 }));
  };

  const reset = () => {
    setPlayerChoice(null);
    setComputerChoice(null);
    setResult("");
    setScore({ wins: 0, losses: 0, draws: 0 });
  };

  return (
    <div
      className="h-screen w-full flex flex-col items-center justify-center text-[#00FFEA] px-4"
      style={{
        background: "linear-gradient(135deg, #1e0033, #000000)",
        fontFamily: '"Press Start 2P", monospace',
        textShadow: "0 0 4px #00ffff, 0 0 6px #00ffff",
      }}
    >
      <h1 className="text-xl sm:text-2xl text-[#ff00cc] mb-4">Stone Paper Scissor</h1>

      <div className="flex gap-4 mb-6 flex-wrap justify-center">
        {choices.map((choice) => (
          <button
            key={choice}
            onClick={() => play(choice)}
            className="bg-[#00ffcc] text-black px-4 py-2 text-xs border border-white hover:bg-[#00e6b8] uppercase"
          >
            {choice}
          </button>
        ))}
      </div>

      {result && (
        <div className="text-center space-y-2 mb-6">
          <p className="text-sm">
            You chose: <span className="text-[#ff00cc]">{playerChoice}</span>
          </p>
          <p className="text-sm">
            Computer chose: <span className="text-[#00ff99]">{computerChoice}</span>
          </p>
          <p className="text-base">
            Result:
            {result === "win"
              ? " You Win!"
              : result === "lose"
              ? " You Lose!"
              : " Draw!"}
          </p>
        </div>
      )}

      <div className="text-xs text-center mb-4">
        <p>Wins: {score.wins} | Losses: {score.losses} | Draws: {score.draws}</p>
      </div>

      <button
        onClick={reset}
        className="bg-[#999] text-black text-xs px-4 py-2 border border-white hover:bg-[#ccc]"
      >
        Reset
      </button>
    </div>
  );
};

export default StonePaperScissors;
