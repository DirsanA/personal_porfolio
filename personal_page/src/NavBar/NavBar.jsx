import "./NavBar.css";
import menuIcon from "../assets/edusity/menu-icon.png";
import logo from "../assets/edusity/daLogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [sticky, setSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const [mobileMenu, setMobileMenu] = useState(false);
  const toggleMenu = () => {
    mobileMenu ? setMobileMenu(false) : setMobileMenu(true);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo udacity" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          {" "}
          <Link to="hero" smooth={true} offset={0} duration={500}>
            Home
          </Link>
        </li>

        <li>
          <Link to="about" smooth={true} offset={-150} duration={500}>
            About us
          </Link>
        </li>
        <li>
          <Link to="Programs" smooth={true} offset={-190} duration={500}>
            Skill
          </Link>
        </li>
        <li>
          <Link to="test" smooth={true} offset={-230} duration={500}>
            Projects
          </Link>
        </li>
        <li>
          <Link to="contact" smooth={true} offset={-220} duration={500}>
            <button className="btn">Contact Us</button>
          </Link>
        </li>
      </ul>
      <img src={menuIcon} className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
}

export default NavBar;
