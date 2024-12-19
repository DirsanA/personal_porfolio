import "./About.css";
import aboutImg from "../assets/edusity/about.png";
import playIcon from "../assets/edusity/play-icon.png";
const About = ({ setPlayState }) => {
  return (
    <div className="about">
      <div className="about-left">
        <img src={aboutImg} alt="Image for about" className="aboutImg"></img>
        <img
          src={playIcon}
          alt="Image for Play Icon"
          className="playIcon"
          onClick={() => {
            setPlayState(true);
          }}
        ></img>
      </div>
      <div className="about-right">
        <h3>About University</h3>
        <h2>Nurturing Tomorrows Leader Today</h2>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
          cupiditate ipsam suscipit reiciendis ullam ad ea eius, porro quas at
          recusandae animi sed harum obcaecati corporis quia! Quisquam, iste
          voluptate.
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam
            minus molestias neque sit in voluptate facere ullam harum fugit
            magni consequatur illo fugiat sunt molestiae, possimus veniam dolore
            recusandae ipsam.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            recusandae iste odit exercitationem laborum vero ducimus numquam
            illo nisi molestiae nemo, quo voluptatem velit reiciendis,
            distinctio incidunt perferendis. Adipisci, temporibus.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Impedit
            recusandae iste odit exercitationem laborum vero
          </p>
        </p>
      </div>
    </div>
  );
};
export default About;
