import { useEffect, useRef, useState } from "react";
import "./Title.css";

const Title = ({ title, subTitle }) => {
  const titleRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState("down");

  useEffect(() => {
    let lastScrollY = window.scrollY;

    const handleScroll = () => {
      if (window.scrollY > lastScrollY) {
        setScrollDirection("down"); // Scrolling down
      } else {
        setScrollDirection("up"); // Scrolling up
      }
      lastScrollY = window.scrollY;
    };

    window.addEventListener("scroll", handleScroll);

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        } else {
          setIsVisible(false);
        }
      },
      { threshold: 0.5 }
    );

    if (titleRef.current) {
      observer.observe(titleRef.current);
    }

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={titleRef}
      className={`title ${isVisible ? "animate" : ""} ${
        scrollDirection === "up" ? "scroll-up" : "scroll-down"
      }`}
    >
      {subTitle && <p className="sub-title">{subTitle}</p>}
      <h2>{title}</h2>
    </div>
  );
};

export default Title;
