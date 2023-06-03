import React, { useEffect, useState } from "react";
import { BiX } from "react-icons/bi";
import { FiAlignRight } from "react-icons/fi";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import { colors } from "../../assets/constants";
import { scroller } from "react-scroll";
import "./Navbar.scss";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const [topScroll, setTopScroll] = useState(false);
  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setTopScroll(false);
    } else {
      setTopScroll(true);
    }
  };

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

  const handleNewsClick = () => {
    scroller.scrollTo("news", {
      smooth: true,
      offset: -50, // Adjust the offset as needed to align with your fixed navbar
    });
  };

  function CustomLink({
    to,
    children,
    reload,
    ...props
  }: {
    to: string;
    children: React.ReactNode;
    reload?: boolean;
  }) {
    const resolvedPath = useResolvedPath(to);
    const isActive = useMatch({ path: resolvedPath.pathname, end: true });

    return (
      <div className="link-item-container">
        <div className={isActive ? "active" : ""}>
          <li>
            <Link
              to={to}
              {...props}
              style={{
                color:
                  location.pathname === "/contact"
                    ? colors.accent
                    : topScroll
                    ? "rgb(36, 35, 35)"
                    : colors.accent,
              }}
            >
              {children}
            </Link>
          </li>
        </div>
      </div>
    );
  }

  return (
    <nav
      className="navbar"
      id="navbar"
      style={{
        background:
          location.pathname === "/contact"
            ? colors.grey
            : topScroll
            ? "transparent"
            : "#FFF",
      }}
    >
      <div className="navbar-logo">
        <h1 className="logo">
          <Link
            to="/"
            style={{
              color:
                location.pathname === "/contact"
                  ? colors.accent
                  : topScroll
                  ? "rgb(36, 35, 35)"
                  : colors.accent,
            }}
          >
            Laverdaboom
          </Link>
        </h1>
      </div>
      <ul className="navbar-links">
        <div className="nav-item">
          {/* <Link to="/#news" reloadDocument>
            Nyheter
          </Link> */}
          <CustomLink to="/#news" reload={true}>
            Nyheter
          </CustomLink>
        </div>
        <div className="nav-item">
          <CustomLink to="/dogs">Våra hundar</CustomLink>
        </div>
        <div className="nav-item">
          <CustomLink to="/contact">Kontakt</CustomLink>
        </div>
        <div className="nav-item">
          <CustomLink to="/puppies">Valpar</CustomLink>
        </div>
      </ul>
      <div className="navbar-smallscreen">
        <FiAlignRight onClick={() => setToggleMenu(true)} />

        {toggleMenu && (
          <div className="navbar-smallscreen_overlay">
            <BiX
              className="overlay-close"
              onClick={() => setToggleMenu(false)}
            />
            <ul className="navbar-smallscreen_links">
              <li>
                <Link to="/" onClick={() => setToggleMenu(false)}>
                  Hem
                </Link>
              </li>
              <li>
                <Link to="/dogs" onClick={() => setToggleMenu(false)}>
                  Våra hundar
                </Link>
              </li>
              <li>
                <Link to="/contact" onClick={() => setToggleMenu(false)}>
                  Kontakt
                </Link>
              </li>
              <li>
                <Link to="/puppies" onClick={() => setToggleMenu(false)}>
                  Valpar
                </Link>
              </li>
            </ul>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
