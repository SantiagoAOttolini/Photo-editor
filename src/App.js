import "./App.css";
import Slider from "./Slider";
import SlidebarItem from "./SlidebarItem";

function App() {
  return (
    <div className="container">
      <div className="mainImage" />
      <div className="sidebar">
      <SlidebarItem/>
      <SlidebarItem/>
      </div>
      <Slider />
    </div>
  );
}

export default App;
