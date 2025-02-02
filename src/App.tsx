import "./App.css";
import Squares from "./background/Squares";
import About from "./components/About";
import ContactMe from "./components/ContactMe";
import Footer from "./components/Footer";
import Projects from "./components/Projects";
import Skill from "./components/Skill";
function App() {
  return (
    <>
    <div className="relative min-h-screen bg-[#060606] text-white text-center overflow-x-hidden">
    <div className="absolute w-full h-full z-10 ">
        <Squares
          speed={0.5}
          squareSize={40}
          direction="diagonal"
          borderColor="#171717"
          hoverFillColor="#222"
        />
      </div>
      <div className="relative flex flex-col justify-center items-center h-screen w-full">
      <div className="z-21 text-7xl font-bold text-start">
        <h1>Hi, I'm Brahm</h1>
        <h1>A full stack web developer</h1>
      </div>
      </div>
    </div>
    <About />
    <Skill />
      <Projects />
      <ContactMe />
      <Footer />
    </>
  );
}

export default App;
