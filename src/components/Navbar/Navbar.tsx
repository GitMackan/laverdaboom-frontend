import React, { useEffect, useRef, useState } from "react";
import { Link, useLocation, useMatch, useResolvedPath } from "react-router-dom";
import { colors } from "../../assets/constants";
import "./Navbar.scss";
import Reveal from "../Animation.tsx/Reveal";
import Hamburger from "hamburger-react";
import { motion } from "framer-motion";
import { navItems } from "./navItems";

const fadeInAnimationVariants = {
	initial: {
		opacity: 0,
		y: 100,
	},
	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.15 * index,
		},
	}),
};

const Navbar = () => {
	const [topScroll, setTopScroll] = useState(true);
	const [menuOpen, setMenuOpen] = useState(false);
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
						? "#FFF"
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
				<div className="nav-item">
					<CustomLink to="/">Hem</CustomLink>
				</div>
				<div className="nav-item">
					<CustomLink to="/dogs">Våra hundar</CustomLink>
				</div>
				<div className="nav-item">
					<CustomLink to="/puppies">Valpar</CustomLink>
				</div>
				<div className="nav-item">
					<CustomLink to="/news">Nyheter</CustomLink>
				</div>
				<div className="nav-item">
					<CustomLink to="/contact">Kontakt</CustomLink>
				</div>
			</ul>
			<div className="navbar-smallscreen">
				<div
					className="hamburger-btn "
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
					<Hamburger
						direction="left"
						onToggle={() => setMenuOpen(!menuOpen)}
						toggled={menuOpen}
					/>
				</div>
				{menuOpen && (
					<div
						className={`navbar-smallscreen_overlay ${
							menuOpen ? "overlay-open" : ""
						}`}
					>
						<ul className="navbar-smallscreen_links">
							{navItems.map((e, index) => (
								<motion.li
									onClick={() => setMenuOpen(false)}
									key={index}
									variants={fadeInAnimationVariants}
									initial="initial"
									whileInView="animate"
									custom={index}
								>
									<Link to={e.href}>{e.label}</Link>
								</motion.li>
							))}
						</ul>
					</div>
				)}
			</div>
		</nav>
	);
};
export default Navbar;
