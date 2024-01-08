import "./App.css";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Mainbody from "./components/Mainbody";
import Carousel from "./components/Carousel";
import About from "./components/About";

function App() {
  return (
    <>
      <Navbar />
      <Carousel />
      <About />
      <Mainbody image={"../public/images/cards.jpg"} />
      <Footer />
    </>
  );
}

export default App;
