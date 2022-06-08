import './assets/App.css';
import Header from "./Components/Header.js";
import Banner from "./Components/Banner.js";
import Busqueda from "./Components/Busqueda.js";
import Body from "./Components/Body.js";
import CardItems from "./Components/CardItems.js";
import Nosotros from "./Components/Nosotros.js";
import Footer from "./Components/Footer.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner/>
      <Busqueda/>
      <Body/>
      <CardItems/>
      <Nosotros/>
      <Footer/>
    </div>
  );
}

export default App;
