import "./App.css";
import { detalleCard } from "./data/data.js";
import CardApp from "./components/CardApp.jsx";
import CarouselApp from "./components/CarouselApp.jsx";
import NavBar from "./components/NavBar.jsx";

function App() {
  return (
    <>
      <NavBar />
      <CarouselApp />
      <div className="container">
        <div className="row">
          {detalleCard.map((item, index) => (
            <CardApp item={item} key={index} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
