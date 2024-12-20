import Hero from "./Hero/Hero";
import NavBar from "./NavBar/NavBar";
import Programs from "./Programs/Programs";
import Title from "./Title/Title";
import About from "./About/About";
import Testimonals from "./Testimonals/Testimonals";
import Contact from "./Contact/Contact";
import Footer from "./Footer/Footer";
import VideoPlayer from "./VideoPlayer/VideoPlayer";
import lang2 from "./assets/edusity/mysql.jpg";
import lang3 from "./assets/edusity/image.png";
import lang4 from "./assets/edusity/node.jpg";
import lang1 from "./assets/edusity/jsu.jpg";
import lang5 from "./assets/edusity/py.jpg";
import lang6 from "./assets/edusity/java.jpg";
import lang7 from "./assets/edusity/react.jpg";
import lang8 from "./assets/edusity/tailwind.jpg";

import { useState } from "react";
function App() {
  const [playState, setPlayState] = useState(false);

  const languages = [
    {
      name: "JavaScript",
      image: lang1,
      progress: 65,
    },
    {
      name: "MySQL",
      image: lang2,
      progress: 75,
    },
    {
      name: "MongoDB",
      image: lang3,
      progress: 90,
    },
    {
      name: "Node js",
      image: lang4,
      progress: 90,
    },
    {
      name: "Python",
      image: lang5,
      progress: 75,
    },
    {
      name: "Java",
      image: lang6,
      progress: 73,
    },
    {
      name: "React Js",
      image: lang7,
      progress: 90,
    },
    {
      name: "Tailwind css",
      image: lang8,
      progress: 90,
    },
  ];

  return (
    <div
      style={{
        backgroundColor: "#f2f2f2",
      }}
    >
      <NavBar />
      <Hero />
      <div className="container">
        <Title title="About Me" />
        <About setPlayState={setPlayState} />
        <Title title="Skills" />
        {/* Pass the languages data here */}
        <Programs languages={languages} />
        <Title title="Projects" />
        <Testimonals />
        <Title subTitle="Contact Us" title="Get in touch" />
        <Contact />
        <Footer />
      </div>
      <VideoPlayer playState={playState} setPlayState={setPlayState} />
    </div>
  );
}

export default App;
