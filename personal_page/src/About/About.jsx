import "./About.css";
import aboutImg from "../assets/edusity/about.png";
import playIcon from "../assets/edusity/play-icon.png";

const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img
          src={aboutImg}
          alt="About Dirsan Antehun"
          className="aboutImg"
        ></img>
        <img
          src={playIcon}
          alt="Play Icon"
          className="playIcon"
          onClick={() => {
            setPlayState(true);
          }}
        ></img>
      </div>
      <div className="about-right">
        <h3>About Me</h3>
        <h2>
          Hi, <span className="underline-animation">I'm Dirsan Antehun</span>
        </h2>
        <p>
          I'm a passionate software engineer, a creative video editor, and a
          skilled application developer with a strong drive for building digital
          solutions. My goal is to bring your ideas to life through code,
          design, and innovation.
        </p>
        <p>
          With a solid foundation in software engineering, I specialize in
          developing high-performance applications that are both functional and
          user-friendly. Whether it's mobile app development, web development,
          or creating engaging video content, I strive to deliver top-quality
          results for every project.
        </p>
        <p>
          I have experience working with various programming languages,
          frameworks, and tools, including Java, Android, JavaScript, React, and
          Firebase. My passion for problem-solving and my attention to detail
          help me create seamless user experiences, and I enjoy collaborating
          with clients to bring their visions to life.
        </p>
      </div>
    </div>
  );
};

export default About;
