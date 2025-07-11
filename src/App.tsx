import "./App.css";
import { useState, useEffect } from "react";
import FirstPage from "./components/Homepage/Cover/Cover";
import AboutPage from "./components/About/About";
import Navbar from "./components/navbar/Navbar";
import Skill from "./components/Skill/Skill";
import Project from "./components/Projects/Projects";
import GameZone from "./components/Zone/Zone";
import Footer from "./components/Footer/Footer";
import { Routes, Route } from "react-router-dom";

import DiceGame from "./components/Games/DiceDuel";
import GuessTheNumber from "./components/Games/GuesstheNumber";
import ClickDotGame from "./components/Games/ReactionGame";
import StonePaperScissors from "./components/Games/StonePaperScissor";
import TicTacToe from "./components/Games/TicTacToe";

import MouseGlow from "./MouseGlow";

import { PacmanLoader } from "react-spinners";

const App = () => {
  const [loading, setLoading] = useState<boolean>(true);
  useEffect(() => {
    const handleLoading = () => {
      setTimeout(() => setLoading(false), 3000);
    };

    if (document.readyState === "complete") {
      handleLoading();
    } else {
      window.addEventListener("load", handleLoading);
    }

    return () => window.removeEventListener("load", handleLoading);
  }, []);
  return (
    <>
       {loading ? (
        <>
           <div className="w-full h-screen bg-[#0F172A] flex justify-center items-center">
    <PacmanLoader color="#cbb7f0" margin={0} />
    <MouseGlow />
  </div>   
        </>
      ) : (
        <>
          <MouseGlow />
          <Routes>
            <Route
              path="/"
              element={
                <>
                  <section className="fixed z-50">
                    <Navbar />
                  </section>
                  <section id="home">
                    <FirstPage />
                  </section>
                  <section id="about">
                    <AboutPage />
                  </section>
                  <section id="skill">
                    <Skill />
                  </section>
                  <section id="project">
                    <Project />
                  </section>
                  <section>
                    <GameZone />
                  </section>
                  <section>
                    <Footer />
                  </section>
                </>
              }
            />
            <Route path="/dice" element={<DiceGame />} />
            <Route path="/gtn" element={<GuessTheNumber />} />
            <Route path="/cdg" element={<ClickDotGame />} />
            <Route path="/sps" element={<StonePaperScissors />} />
            <Route path="/ttt" element={<TicTacToe />} />
          </Routes>
        </>
      )}
    </>
  );
};

export default App;
