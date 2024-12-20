import { useRef } from "react";
import backIcon from "../assets/edusity/back-icon.png";
import nextIcon from "../assets/edusity/next-icon.png";
import user1 from "../assets/edusity/f1.png";
import user2 from "../assets/edusity/f2.png";
import user3 from "../assets/edusity/f3.png";
import user4 from "../assets/edusity/f2.png";
import "./Testimonals.css";

function Testimonals() {
  const slider = useRef();
  let tx = 0;
  const slideForward = () => {
    if (tx > -50) {
      tx -= 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  const slideBackward = () => {
    if (tx < 0) {
      tx += 25;
    }
    slider.current.style.transform = `translateX(${tx}%)`;
  };
  return (
    <div className="test">
      <img
        src={nextIcon}
        alt="Next Icon"
        className="next-btn"
        onClick={slideForward}
      ></img>
      <img
        src={backIcon}
        alt="Back Icon"
        className="back-btn"
        onClick={slideBackward}
      ></img>
      <div className="slider">
        <ul ref={slider}>
          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user1} alt="" />
              </div>
              <div>
                <h3>Steven Jackson</h3>
                <span>Inovation,USA</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user2} alt="" />
              </div>
              <div>
                <h3>Willam Jackson</h3>
                <span>Udacity,Uk</span>
              </div>
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user4} alt="" />
              </div>
              <div>
                <h3>Lidya Yackob</h3>
                <span>Udacity,Uk</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Est,
              </p>
            </div>
          </li>

          <li>
            <div className="slide">
              <div className="user-info">
                <img src={user3} alt="" />
              </div>
              <div>
                <h3>Lidya Yackob</h3>
                <span>Udacity,Uk</span>
              </div>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Modi
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Testimonals;
