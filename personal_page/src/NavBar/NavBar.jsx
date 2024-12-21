import "./NavBar.css";
import menuIcon from "../assets/edusity/menu.png";
import logo from "../assets/edusity/daLogo.jpg";
import { useEffect, useState } from "react";
import { Link } from "react-scroll";

function NavBar() {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

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

  const handleSetActive = (to) => {
    setActiveSection(to);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo Dirsan" className="logo" />
      <ul className={mobileMenu ? "" : "hide-mobile-menu"}>
        <li className={activeSection === "hero" ? "active" : ""}>
          <Link
            to="hero"
            smooth={true}
            offset={0}
            duration={500}
            onClick={closeMenu}
            spy={true}
            onSetActive={handleSetActive}
          >
            Home
          </Link>
        </li>
        <li className={activeSection === "about" ? "active" : ""}>
          <Link
            to="about"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
            spy={true}
            onSetActive={handleSetActive}
          >
            About Me
          </Link>
        </li>
        <li className={activeSection === "Programs" ? "active" : ""}>
          <Link
            to="Programs"
            smooth={true}
            offset={-70}
            duration={500}
            onClick={closeMenu}
            spy={true}
            onSetActive={handleSetActive}
          >
            Skill
          </Link>
        </li>
        <li className={activeSection === "test" ? "active" : ""}>
          <Link
            to="test"
            smooth={true}
            offset={-150}
            duration={500}
            onClick={closeMenu}
            spy={true}
            onSetActive={handleSetActive}
          >
            Projects
          </Link>
        </li>
        <li className={activeSection === "contact" ? "active" : ""}>
          <Link
            to="contact"
            smooth={true}
            offset={-220}
            duration={500}
            onClick={closeMenu}
            spy={true}
            onSetActive={handleSetActive}
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
