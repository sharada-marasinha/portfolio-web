import "flowbite";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import ThreeScene from "./components/ThreeScene";

function App() {
  return (
    <>
    <div style={{ width: '100vw', height: '100vh' }}>
    <Navbar/>
      <ThreeScene />
      <Hero/>
      <Footer/>
    </div>
    </>
  );
}

export default App;
