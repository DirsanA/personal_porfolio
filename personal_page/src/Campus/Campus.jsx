import "./Campus.css";
import gallery1 from "../assets/edusity/gallery-1.png";
import gallery2 from "../assets/edusity/gallery-2.png";
import gallery3 from "../assets/edusity/gallery-3.png";
import gallery4 from "../assets/edusity/gallery-4.png";
import darkArrow from "../assets/edusity/dark-arrow.png";

const Campus = () => {
  return (
    <div className="campuse">
      <div className="gallery">
        <img src={gallery1} alt="" />
        <img src={gallery2} alt="" />
        <img src={gallery3} alt="" />
        <img src={gallery4} alt="" />
      </div>
      <button className="btn">
        See More <img src={darkArrow} alt=""></img>
      </button>
    </div>
  );
};
export default Campus;
