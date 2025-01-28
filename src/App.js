import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";
import Event from "./components/Events/Event";
import Service from "./components/Services/Service";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Insights from "./components/Insights/Insights";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <About />
      <Event />
      <Service />
      <Insights />
      <Contact />
      <Footer />
      
    </div>
  );
}

export default App;
