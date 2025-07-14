import TicTacToeImage from "../game_images/image copy 2.png";
import DiceImage from "../game_images/image.png";
import GuessImage from "../game_images/image copy.png";
import DotImage from "../game_images/image copy 3.png";
import SPS from "../game_images/image copy 4.png";
import { Link } from "react-router-dom";

const games = [
  {
    image: TicTacToeImage,
    title: "Tic Tac Toe",
    desc: "A good ol' retro duel between X and O.",
    path: "/ttt",
  },
  {
    image: DiceImage,
    title: "Dice Duel",
    desc: "Roll your way to 100 without overshooting. Classic 2-player chaos!",
    path: "/dice",
  },
  {
    image: GuessImage,
    title: "Guess the Number",
    desc: "Retro terminal vibes. Can you guess the number in fewer tries?",
    path: "/gtn",
  },
  {
    image: DotImage,
    title: "Reaction Dot",
    desc: "Click the dot as fast as possible. Test your reflexes!",
    path: "/cdg",
  },
  {
    image: SPS,
    title: "Stone Paper Scissors",
    desc: "Arcade-style RPS showdown vs the machine. Can you outsmart it?",
    path: "/sps",
  },
];

const GameZone = () => {
  return (
    <section className="bg-[#0F172A] py-20 px-6 text-white min-h-screen relative">
      <h2 className="text-4xl font-bold text-center mb-10 bg-gradient-to-r from-white to-purple-600 bg-clip-text text-transparent select-none">
        Game Zone
      </h2>

      <div className="flex flex-wrap gap-6 auto-rows-[300px]">
        {games.map((game, index) => (
          <div
            key={index}
            className={
              "bg-gray-950 rounded-xl shadow-lg p-4 flex flex-col items-center sm:w-[48%] md:w-[30%] lg:w-[22%] justify-between hover:scale-105 flex-wrap select-none"
            }
          >
            <img
              src={game.image}
              alt={game.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2 select-none">{game.title}</h3>
            <p className="text-sm text-center mb-3 px-2 select-none">{game.desc}</p>
            <Link to={game.path}>
              <button className="border-white border-2 px-3 py-1 rounded-xl text-xs cursor-grab select-none">
                Play Now
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
};

export default GameZone;
