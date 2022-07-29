import Navbar from "./components/navbar/Navbar.jsx";
import Hero from "./components/Hero.jsx";
import "./index.css";
import HeadlineCard from "./components/HeadlineCard.jsx";
import Food from "./components/Food";
import Category from "./components/Category.jsx";
function App() {
  return (
    <div className="App">
      <Navbar />
      <Hero />
      <HeadlineCard />
      <Food />
      <Category />
    </div>
  );
}

export default App;
