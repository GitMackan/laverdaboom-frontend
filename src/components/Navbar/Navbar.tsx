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
  const [menuOpen, setMenuOpen] = useState(false);
  const [currentPage, setCurrentPage] = useState<string>();

  const location = useLocation();

  const changeBackground = () => {
    if (window.scrollY >= 80) {
      setTopScroll(false);
    } else {
      setTopScroll(true);
    }
  };

  console.log(location);

  useEffect(() => {
    if (location.pathname === "/") {
      setCurrentPage("home");
    }
  }, []);

  useEffect(() => {
    changeBackground();
    window.addEventListener("scroll", changeBackground);
  }, []);

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
                  location.pathname === "/"
                    ? !topScroll
                      ? colors.accent
                      : colors.grey
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
              color: menuOpen
                ? colors.accent
                : location.pathname === "/"
                ? !topScroll
                  ? colors.accent
                  : colors.grey
                : colors.accent,
            }}
          >
            Laverdaboom
          </Link>
        </h1>
      </div>
      <ul className="navbar-links">
        {/* <div className="nav-item">
          <CustomLink to="/#news" reload={true}>
            Om oss
          </CustomLink>
        </div> */}
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
        {!menuOpen ? (
          <FiAlignRight
            onClick={() => {
              setToggleMenu(true);
              setMenuOpen(true);
            }}
            color={
              location.pathname === "/"
                ? !topScroll
                  ? colors.accent
                  : colors.grey
                : colors.accent
            }
          />
        ) : (
          <BiX
            color={
              menuOpen
                ? colors.accent
                : location.pathname === "/"
                ? colors.grey
                : colors.accent
            }
            className="overlay-close"
            onClick={() => {
              setToggleMenu(false);
              setMenuOpen(false);
            }}
          />
        )}

        {/* {menuOpen && ( */}
        <div
          className={`navbar-smallscreen_overlay ${
            menuOpen ? "overlay-open" : ""
          }`}
        >
          {/* <BiX
            color="#324b4c"
            className="overlay-close"
            onClick={() => {
              setToggleMenu(false);
              setMenuOpen(false);
            }}
          /> */}
          <ul className="navbar-smallscreen_links">
            <li>
              <Link to="/" onClick={() => setMenuOpen(false)}>
                Hem
              </Link>
            </li>
            {/* <li>
              <Link to="/#news" onClick={() => setMenuOpen(false)}>
                Om oss
              </Link>
            </li> */}
            <li>
              <Link to="/dogs" onClick={() => setMenuOpen(false)}>
                Våra hundar
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={() => setMenuOpen(false)}>
                Kontakt
              </Link>
            </li>
            <li>
              <Link to="/puppies" onClick={() => setMenuOpen(false)}>
                Valpar
              </Link>
            </li>
          </ul>
        </div>
        {/* )} */}
      </div>
    </nav>
  );
};

export default Navbar;
