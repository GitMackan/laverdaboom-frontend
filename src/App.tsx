import Navbar from "./components/Navbar/Navbar";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Dogs from "./pages/dogs/Dogs";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Footer from "./components/Footer/Footer";
import { CookiesProvider } from "react-cookie";
import Admin from "./pages/admin/Admin";
import { ParallaxProvider } from "react-scroll-parallax";
import "./styles.scss";
import Puppies from "./pages/Puppies";
import { useEffect } from "react";

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0); // Reset scroll position to top
  }, [pathname]);

  return null; // This component doesn't render anything
};

function App() {
  return (
    <CookiesProvider>
      <ParallaxProvider>
        <Navbar />
        <div className="container">
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/dogs" element={<Dogs />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/about" element={<About />} />
            <Route path="/admin" element={<Admin />} />
            <Route path="/puppies" element={<Puppies />} />
          </Routes>
        </div>
        <Footer />
      </ParallaxProvider>
    </CookiesProvider>
  );
}

export default App;
