import darkArrow from "../assets/edusity/dark-arrow.png";
import "../Hero/Hero.css";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero container">
      <div className="hero-text">
        <h1>Hi, I'm Dirsan Antehun</h1>
        <h2 className="animate-text">Welcome to My Portfolio</h2>
        <p>
          I'm a Software Engineer and Video Editor. I create engaging projects
          that combine technology and creativity to build unique and impactful
          solutions.
        </p>
        <Link to="test" smooth={true} offset={-230} duration={500}>
          <button className="btn">
            Explore My Work <img src={darkArrow} alt="Arrow" />
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Hero;
