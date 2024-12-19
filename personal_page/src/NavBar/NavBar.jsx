import "./NavBar.css";
import menuIcon from "../assets/edusity/menu.png";
import logo from "../assets/edusity/daLogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setMobileMenu(!mobileMenu);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo udacity" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
          >
            Home
          </Link>
        </li>
        <li>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
          >
            About Me
          </Link>
        </li>
        <li>
          <Link
            to="Programs"
            smooth={true}
            offset={-190}
            duration={500}
            onClick={closeMenu}
          >
            Skill
          </Link>
        </li>
        <li>
          <Link
            to="test"
            smooth={true}
            offset={-230}
            duration={500}
            onClick={closeMenu}
          >
            Projects
          </Link>
        </li>
        <li>
          <Link
            to="contact"
            smooth={true}
            offset={-220}
            duration={500}
            onClick={closeMenu}
          >
            <button className="btn">Contact Me</button>
          </Link>
        </li>
      </ul>
      <img src={menuIcon} className="menuIcon" onClick={toggleMenu} />
    </nav>
  );
}

export default NavBar;
