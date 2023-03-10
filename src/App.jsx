import styled from "styled-components";
import About from "./components/About";
import Contact from "./components/Contact";
import Hero from "./components/Hero";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import MyNavbar from "./components/MyNavbar";
import Work from "./components/Work";

const Container = styled.div`
  height: 100vh;
  scroll-snap-type: y mandatory;
  scroll-behavior: smooth;
  overflow-y: auto;
  scrollbar-width: none;
  color: white;
  background: url("./img/mainBg.png");
  &::-webkit-scrollbar {
    display: none;
  }
`;

const Section = styled.section`
  height: 100vh;
  scroll-snap-align: start;
`;

function App() {
  return (
    <div style={{ background: `url("./img/mainBg.png")`, overflowY: "auto" }}>
      <Router>
        <MyNavbar />
        <Routes>
          <Route
            path="/"
            element={
              <Section id="hero">
                <Hero />
              </Section>
            }
          />
          <Route
            path="/about"
            element={
              <Section id="hero">
                <About />
              </Section>
            }
          />
          <Route
            path="/contact"
            element={
              <Section id="hero">
                <Contact />
              </Section>
            }
          />
          <Route
            path="/works"
            element={
              <Section id="hero">
                <Work />
              </Section>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
