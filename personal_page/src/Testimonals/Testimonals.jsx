import { useRef } from "react";
import backIcon from "../assets/edusity/back-icon.png";
import nextIcon from "../assets/edusity/next-icon.png";
import user1 from "../assets/edusity/user-1.png";
import user2 from "../assets/edusity/user-2.png";
import user3 from "../assets/edusity/user-3.png";
import user4 from "../assets/edusity/user-4.png";
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
                accusantium voluptas temporibus quidem repellendus debitis,
                impedit beatae, magnam dicta unde obcaecati nisi similique
                atque, quisquam enim asperiores soluta ratione id?
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
                magni, et reiciendis fuga accusantium quam pariatur est fugit
                dolore inventore! Explicabo vel consequatur nam commodi! Laborum
                debitis at cumque optio?
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
                esse pariatur in quibusdam dolorum minima soluta dolor?
                Consequatur, maxime facilis. Molestias assumenda nisi minima
                placeat error voluptatem, sapiente veritatis voluptate.
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
                porro repudiandae adipisci at quia ad, sed dolorum
                necessitatibus odio esse? Numquam mollitia ab exercitationem
                repellendus nostrum dolor sunt dolorum provident.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}
export default Testimonals;
