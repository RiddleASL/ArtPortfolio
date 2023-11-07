import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

//Components
import ToTop from "./components/ToTop";
import NavComp from "./components/NavComp";
import Footer from "./components/Footer";

//Pages
import Art from "./pages/Art";
import AboutMe from "./pages/AboutMe";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import { Helmet } from "react-helmet";

function App() {
  return (
      <Router>
        <Helmet>
          <title>Riddle Portfolio</title>
          <meta name="description" content="Riddles Art/Media Portfolio" />
        </Helmet>
          <NavComp />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/art" element={<Art />}></Route>
            <Route path="/about" element={<AboutMe />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
          </Routes>
          <Footer />
          <ToTop />
      </Router>
  );
}

export default App;
