import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainbody from "./components/Mainbody";
import Carousel from "./components/Carousel";
import About from "./components/About";
import Contact from "./components/Contact";

import img1 from "./images/bg4.jpg";
function App() {
  return (
    <>
      <Navbar />
      <img src={img1} alt="" style={{ height: "100%", width: "100%" }} />
      {/* <Carousel /> */}
      <About />
      <Mainbody image={"../public/images/cards.jpg"} />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
